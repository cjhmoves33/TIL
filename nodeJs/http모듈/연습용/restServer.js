const http = require('http');
const fs = require('fs').promises;

const PORT = 5000;
const HOST = 'localhost';

const userList = require('./dummy/userList.js');
const currentUserTemp = {...userList};

const app = http.createServer(async (req, res) => {
  try{
    console.log(`request method is ${req.method}, url is ${req.url}`);
    if(req.method === 'GET') {
      if(req.url === '/') {
        const indexPage = await fs.readFile('./index.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(indexPage);
        return res.end();

      } else if(req.url === '/about') {
        const aboutPage = await fs.readFile('./pages/about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(aboutPage);
        return res.end();

      } else if(req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(currentUserTemp));
        return res.end();

      } else if(req.url === '/register') {
        const registerPage = await fs.readFile('./register.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(registerPage);

      }
    }
    if(req.method === 'POST') {
      if(req.url === '/register') {
        const dataBox = [];
        req.on('data', chunk => {
          dataBox.push(chunk);
          const newUser = JSON.parse(chunk)
          currentUserTemp[newUser.name] = newUser;
          console.log(currentUserTemp);
        });
        return req.on('end', () => {
          res.writeHead(201, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          });
          return res.end(Buffer.concat(dataBox));
        })
      }
    }
    if(req.method === 'PUT') {
      if(req.url.startsWith('/users/')) {
        const userKey =  req.url.split('/')[2];
        const changeItem =  req.url.split('/')[3];
        const userInfo =  currentUserTemp[userKey];
        req.on('data', (data) => {
          const modifyContent =  JSON.parse(data);
          userInfo[changeItem] = modifyContent;
        });
        return req.on('end', () => {
          res.writeHead(201, { 'Content-type': 'text/plain; charset=utf-8' });
          return res.end('변경완료.');
        })
      }
    }
    // ? 요청 주소가 / 도아니고 /about도 아닌것들(index.html을 보면 알 수 있듯이 html내 script또는 css는 GET요청을 따로 보낸다.)
    try {
      const data = await fs.readFile(`.${req.url}`);
      return res.end(data);
    } catch (err) {
      console.log('오류난 요청: ', req.method)
      console.log('오류난 url: ', req.url)
      console.error(err);
    }
    res.writeHead(404);
    return res.end('Not Found');

  } catch(err) {
    console.error(err);
  }

});

app.listen(PORT, HOST, () => {
  console.log(`
  서버가 실시간으로 대기중입니다.
  도메인: ${HOST}, 포트: ${PORT}
  `);
})
