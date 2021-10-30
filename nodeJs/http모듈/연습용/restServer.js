const http = require('http');
const fs = require('fs').promises;

const PORT = 5000;
const HOST = 'localhost';

const currentUserTemp = [];

const app = http.createServer(async (req, res) => {
  try{
    console.log(`request method is ${req.method}, url is ${req.url}`);
    if(req.method === 'GET') {
      if(req.url === '/') {
        const indexPage = await fs.readFile('./index.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        // console.log(indexPage);
        // fs.readFile은 데이터를 버퍼로 가져오고있음을 확인할 수 있다.
        res.write(indexPage);
        return res.end();

      } else if(req.url === '/about') {
        const aboutPage = await fs.readFile('./pages/about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(aboutPage);
        return res.end();

      } else if(req.url === '/users') {
        // const usersList = await fs.readFile('./dummy/userList.js');
        // ? 여기서 그냥 js파일을 불러와서 보낸다면 클라이언트는 user목록이아닌 js파일자체를 받게되는 오류가 발생한다.
        const userList = require('./dummy/userList.js');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.writeHead(200, { 'Content-Type': 'text/plain' });
        // res.write(userList); // ! res.write에는 스트링이나 버퍼타입을 줘야한다.
        res.write(JSON.stringify(userList));
        // const userListToString = JSON.stringify(userList);
        // res.write(Buffer.alloc(userListToString.length, userListToString));
        // res.write(Buffer.from(userListToString));
        return res.end();

      } else if(req.url === '/register') {
        const registerPage = await fs.readFile('./register.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(registerPage);
      }
    } 
    if(req.method === 'POST') {
      console.log(currentUserTemp);
      if(req.url === '/register') {
        const dataBox = [];
        req.on('data', chunk => {
          dataBox.push(chunk);
          currentUserTemp.push(JSON.parse(chunk));
        })
        .on('end', () => {
          res.writeHead(201, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          });
          return res.end(Buffer.concat(dataBox));
        })
        return;
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
