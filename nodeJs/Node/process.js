// ?  터미널에서 node 실행후 process 를 입력
// process {...}

// * 다양한 정보를 알 수 있다. 
// * process.version - 설치된 노드 버전
// * process.arch - 프로레서 아키텍처 정보. arm, ia32등 일 수도 있다.
// * process.platform - 현재 프로세스의 플랫폼 정보. linux, darwin(맥), freebsd등의 값일 수 있다.
// * process.pid  - 현재 프로세스의 아이디. 프로세스를 여러개 가질 때 구분 할 수 있다. 프로세스 강제종료할 때 사용가능.
// * process.uptime()  - 프로세스가 시작된 후 흐른 시간. 초 단위
// * process.execPath - 노드의 경로
// * process.cwd() - 현재 프로세스가 실행되는 위치
// * process.cpuUsage() - 현재 cpu 사용량

// ? process.env(환경변수)
// * 시스템 환경 변수들이 들어있는 객체
// * 비밀키(데이터베이스 비밀번호, 서드파티 앱 키 등)를 보관하는 용도로도 쓰임
// const secretId = process.env.SECRET_ID;
// const secretPW = process.env.SECRET_PW;

// * 일부 환경 변수는 노드 실행 시 영향을 미침
// 예) NODE_OPTIONS(노드 실행 옵션), UV_THREADPOOL_SIZE(스레드풀 개수)


// ? process.nextTike()
// * 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백을 우선적으로 처리함
// 너무 남용하면 다른 콜백 함수들 실행이 늦어진다.
// promise도 nextTick처럼 우선순위가 높다.
setImmediate(() => {
  console.log('immediate');
});
process.nextTick(() => {
  console.log('nextTick');
});
setTimeout(() => {
  console.log('timeout');
});
Promise.resolve().then(() => console.log('promise'));
// 실행순서: nextTick -> promise -> (timeout, immediate 이 둘은 환경에따라 다름)
// nextTick과 promise와 같이 마이크로태스크큐에 의해 우선 순위를 가지는 경우 순서를 지킨다.


// ? process.exit()
// * 프로세스를 끄고 싶을 때 process.exit(0)으로 서버를 끌 수 있게된다.
// * process.exit(1) 인자의 값이 0이면 에러가 없이 종료된 것을 의미하고, 0인 아니값(예를 들면 1)이 인자로 들어가면 무언가 에러가 발생하고 서버가 꺼졌음을 나타낸다.
// * process.exit(1)은 많이 사용된다. 