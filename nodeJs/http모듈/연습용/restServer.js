const http = require('http');
const fs = require('fs').promises;

const PORT = 5000;
const HOST = 'localhost';


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

      } else if (req.url === '/about') {
        const aboutPage = await fs.readFile('./pages/about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(aboutPage);
        return res.end();
      }
    }

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
