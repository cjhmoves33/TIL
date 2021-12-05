const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.get('/', (req, res) => {
  res.cookie('tester', 'helloworld', { maxAge: 60000 });
  res.end('bye');
})

// res.cookie만으로 브라우저에 쿠키값을 줄 수 있다.
// 스프린트에서 res.cookie가 작동하지 않은 이유를 좀더 자세 찾아봐야한다.
// 401 Unauthorized

app.listen(3001, ()=>{console.log('3001 start')})