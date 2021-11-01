const express = require('express');
const app = express();
// const PORT = 5001;
app.set('port', process.env.PORT || 5001);
// ? app.set은 첫번째 인자(name)를 일종의 서버 전역변수(전역프로퍼티)처럼 사용할 수 있다.
// ? app.listen에서 app.get('port')를 사용해서 port에 담은 5001을 불러왔음을 확인할 수 있다.

app.get('/', (req, res) => {
  res.send('서버열림요.')
});
app.post('/', (req, res) => {
  res.send('POST요청 들어옴요.');
});

app.get('/about', (req, res) => {
  res.send('this is about page');
});

app.listen(app.get('port'), () => {
  console.log(`서버잘돌아감 ${PORT}포트 사용중`);
})