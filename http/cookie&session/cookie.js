const http = require('http');

const app = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.headers.cookie);
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test'});
  // 서버에서 클라이언트에게 응답을 보낼때 쿠키를 보내준다.
  // * 브라우저는 서버에서 쿠키를 한번 받게되면 다음 요청부터 자동으로 서버에게 받은 쿠키를 서버에게 주게되는데, 쿠키로 서버는 해당아이피의 사용자를 식별할 수도 있다.(로그인)
  // localhost:3001로 접속해서 최초 GET요청시에는 응답헤더에 Set-Cookie: mycookie=test가 있는 것을 확인 할 수 있고
  // 두번째 부터는(새로고침을 해보면) 요청바디에 Cookie: mycookie=test 응답헤더에 Set-Cookie: mycookie=test가 있는것을 확인할 수 있다.
  res.end('hello cookie');
});

app.listen(3001, 'localhost', () => {
  console.log('3001번 포트로 서버열음.')
})