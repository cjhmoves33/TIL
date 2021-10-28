const fs = require('fs').promises;
const http = require('http');
const PORT = 5000;

const app = http.createServer(async (req, res) => {
  // * 비동기처리는 반드시 예외처리를 해줘야한다.
  try {
    // const data = await fs.readFile('./server.html'); //에러 확인 가능.
    const data = await fs.readFile('./server1.html');
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
      //text/html 은 데이터가 html파일임을 뜻한다.
    });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(400, {
      'Content-Type' : 'text/plain; charset=utf-8'
      // text/plain 은 데이터가 일반 문자열임을 뜻한다.
    });
    res.end(err.message);
  }
  // res.write('<h1>hello node.js</h1>');
  // res.write('<h1>hello http sever</h1>');
  // res.end('<h1>hello world</h1>');
  // html형식의 데이터를 문자열로 주는 수고르 할 필요없이 html파일을 읽어와서 데이터로 넘길  수 있다.
  // write, end의 인자로 넣어준 데이터는 버퍼(청크)로써 응답된다.

});

app.listen(PORT, () => {
  console.log(`${PORT}포트에서 서버 대기중`);
});
// http내장모듈을 가져와서, http.createServer로 서버를 만들고 .listen메서드로 서버를 실행시킨다.

app.on('error', (error) => {
  console.error(error);
});

// * Port의 장점 중 하나는 하나의 도메인(호스트)로 다양한 프로세스를 실행 시키고 정보를 주고 받을 수 있다는 것이다.
// ? 특정 포트에 특정 프로세스 서버를 연결해놓는다면 하나의 도메인에서 다양한 서비스를 제공 할 수 있다는 뜻이 아닐까?