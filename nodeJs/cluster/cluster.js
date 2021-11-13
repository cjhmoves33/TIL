const cluster = require('cluster');
const http = require('http');
const myCPUs = require('os').cpus().length;

// ? cluster 모듈은 기본적으로 싱글스레드로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈이다.
// ? cluster 모듈은 코어 하나당 노드 프로세스 하나가 돌아가게 할 수 있는데(그리고 하나의 포트를 공유할 수 있다.),
// ? 성능이 꼭 8배가 되는건 아니지만 코어 하나만 사용할 때에비해 성능이 개선된다.
// ? 단점은 메모리를 공유하지 못한다는 것이다. 세션을 메모리에 저장하는 경우 문제가 될 수 있는데, redis 등의 메모리 서버를 도입해서 해결할 수 있다.

if(cluster.isPrimary) {
  console.log('Primary 프로세스 아이디: ', process.pid);
  for(let i = 0; i < myCPUs; i++) {
    cluster.fork();
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    console.log('code',code, 'signal', signal);
    // * 여러개의 워커 프로세스가 존재하기 때문에(지금의 경우 8개) 여러번 오류가 발생을 해도 서버가 바로 꺼지지 않고 정상 작동을 할 수 있다.
    // * 워커 하나가 종료되면 다시 켜서 버틸 수 있게 할 수 있다.
    cluster.fork().on('online', () => console.log(`워커 부활!`));
    console.log('----')
    // ? 이것이 오류를 대처하는 좋은 방식이 아님은 확실하다. 만약 서버에 오류가 발생했다면 오류의 원인을 빠르게 찾아 해결해야만 한다.
    // ? 그래도 예기치 못한 에러가 발생했을 때 서버가 종료되는 현상은 막아야 하기때문에 클러스터링을 적용해두면 좋다.
  });
} else {
  // 워커들이 포트에서 대기
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    res.write(`<h1>${process.pid}번 워커에서 응답</h1>`);
    res.end('<p>hello cluster!</p>');
    setTimeout(() => {
      process.exit(1)
      // 워커 존재하는지 확인하기 위해 워커가 특정 워커가 응답을 하고 난 후 프로세스를 강제 종료.
    }, 500);
  })
  .listen(8086, () => {
    console.log(`${process.pid}번 워커 대기 중`);
  });

  console.log(`is worker?: ${cluster.isWorker}`);
}

// ? 클러스터는 여러개의 워커 프로세스를 만들어서 각각의 프로세스에서 하나의 서버를 돌리는 방식이다.
// ? 여기서 Primary 프로세스는 CPU개수만큼 워커 프로세스를 만들고, 8086번 포트에서 대기한다. 요청이 들어오면 만들어진 워커 프로세스에 요청을 분배한다.