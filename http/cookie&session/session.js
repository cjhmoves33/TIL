// ? 세션 구현해보기
const http = require('http');
const fs = require('fs').promises;

const parseCookie = (cookie = '') =>
  cookie
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, [k, v])  => {
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
  }, {});

const session = {};

http.createServer(async (req, res) => {
  const cookie = parseCookie(req.headers.cookie);

  if(req.url.startsWith('/login')) {
    const { searchParams } = new URL(req.url, 'http://localhost');

    const name = searchParams.get('name');
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 3);

    const uniqueInt = Date.now(); // 단순히 유니크한 숫자를 얻기위함.
    session[uniqueInt] = {
      name,
      expires
    }
    
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path='/'`
    });
    res.end();

  } else if (cookie.session && session[cookie.session].expires > new Date()) {
    res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
    res.end(`${session[cookie.session].name}님 ㅎㅇ`);

  } else {
    try {
      const data = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8 '});
      res.end(data);

    } catch(error) {
      res.writeHead(500, { 'Content-type': 'text/plain; charset=utf-8' });
      res.end(error.message);
    }
  }
  console.log(session[cookie.session])
})
.listen(8085, 'localhost', () => {
  console.log('8085 서버 오픈')
})