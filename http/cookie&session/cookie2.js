// ? cookie로 나를 식별하기
const http = require('http');
const fs = require('fs').promises;
// const url = require('url');
// const qs = require('querystring');

const parseCookies = (cookie = '') => 
  cookie
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, [k, v]) => {
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
  }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  console.log(req.headers.cookie);

  // 주소가 /login으로 시작하는 경우
  if(req.url.startsWith('/login')) {
    const { searchParams } = new URL(req.url, 'http://localhost');
    const name = searchParams.get('name');
    // URL.searchParams.get메서드로 GET디코딩된 쿼리파라미터를 가져올 수 있다.

    // 쿠키 유효 시간을 현재 시간 + 1분으로 설정
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 1);

    // * 302 상태코드는 리다이렉트를 할 때 사용된다.
    // * 헤더에 들어갈 Expires는 GMT시간으로 입력해야한다.
    // *[HttpOnly -mdn-] Cross-site 스크립팅(XSS) 공격을 방지하기 위해, HttpOnly쿠키는 JavaScript의 Document.cookie API에 접근할 수 없다.
    // * 서버에게 전송되기만 합니다. 예를 들어, 서버 쪽에서 지속되고 있는 세션의 쿠키는 JavaScript를 사용할 필요성이 없기 때문에 HttpOnly플래그가 설정될 것이다.
    // * Secure는 HTTPS에서만 쿠키가 전송되게 한다.
    // * Domain, Path 디렉티브는 쿠키의 스코프를 정의한다. 어떤 URL에 쿠키를 보냐야하는지.
    // * Path는 Cookie 헤더를 전송하기 위하여 요청되는 URL 내에 반드시 존재해야하는 URL경로다.
    // Path='docs'이 설정된다면, /docs, /docs/web, /docs/web/Http 등에서 모두 매치가 된다.
    // Expires를 설정하지않으면 세션쿠키가 된다.
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
    })
    res.end();

  } else if(cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 ㅎㅇ`);

  } else {
    try {
      const homepage = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
      res.end(homepage);
    } catch(err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
.listen(8084, () => {
  console.log('8084 server start!')
})