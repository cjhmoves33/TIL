const express = require('express');
const expressSession = require('express-session');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(expressSession({
  secret: 'keyboard cat',
  // secret 옵션은 세션 ID 쿠키에 서명하는 데 사용된다. 단일 문자열도 가능하고 배열도가능하다. 배열일 경우 기본적으로 첫번째 요소를 세션 ID 쿠키서명에
  // 사용되고 나머지는 서명을 확인할 때 고려된다.(예를 들면  secret옵션의 값이 예전엔 다른 문자열이였다면, 그 때 생성된 세션ID쿠키들은 그것들로 서명한다.)
  // 지금 입력한것처럼 하드코딩하는것(그리고 사람이 이해할 수 있는 구문)은 좋지 않고 환경변수에 두고 가져오는 것이 좋다.
  cookie: { maxAge: 5000 },
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res, next) => { 
  if(req.session.views) {
    console.log(req.session)
    // req.session.views++;
    res.header({
      'Content-Type': 'text/html; charset=utf-8;'
    });
    res.write(`<p> 조회수: ${req.session.views} </p>`);
    res.end(`<p> 유효 시간(초): ${req.session.cookie.maxAge / 1000} s</p>`);
  } else {
    console.log(req.sessionID)
    req.session.views = 1;
    console.table(req.session.cookie)
    res.end('welcome to the session demo. refresh!');
  }
})

app.listen(process.env.NODE_ENV);