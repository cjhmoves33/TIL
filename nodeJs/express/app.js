const path = require('path');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');

const app = express();
// const PORT = 5001;

const err = (req, res) => {
  throw new Error('비상사태');
}

app.set('port', process.env.PORT || 5001);
// ? app.set은 첫번째 인자(name)를 일종의 서버 전역변수(전역프로퍼티)처럼 사용할 수 있다.
// ? app.listen에서 app.get('port')를 사용해서 port에 담은 5001을 불러왔음을 확인할 수 있다.

app.use(morgan('dev'));
// app.use(morgan('short'));
// app.use(morgan('common'));
// app.use(morgan('combined'));
// ? morgan은 서버로의 요청에대한 정보를 console에 찍어준다. 개발시에는 보통 dev, short를 사용하고 배포시에는 보통 common이나 combined를 사용한다.
// ? combined로 설정하면 시간, IP, 브라우저 정보 등을 확인할 수 있다.
app.use(cookieParser());
app.use(express.json());
// ? express.json()은 클라이언트에서 JSON형태로 보낸 데이터를 파싱한 후 req.body로 넣어준다.
app.use(express.urlencoded({ extended: true })); // extended: true/false true는 qs모듈을 사용하고, false는 queryString 내장모듈을 사용하는데 qs모듈이 더 좋다.
//  extended: true는 객체안의 중첩된 객체를 허용한다는 의미. 
// ? express.urlencoded()는 form데이터를 파싱해준다.
app.use((req, res, next) => {
  // res.send('/category 경로에 params로 요청받았다.');
  // * res.send를 명시적으로 호출한 뒤에는 다음 미들웨어로 넘어가지 않게 해야한다. http에서 req.end와 같음.
  console.log('app.use 미들웨어 실행했다.')
  // ? app.use에 명시적인 경로를 줄 수 있고 명시적인 경로를 주지 않는다면 모든 app의 모든경로에서 실행된다.
  next();
  // ? 미들웨어 함수에서 next를 명시적으로 호출해줘야 해당하는 라우터를 찾고 그 미들웨어 함수를 실행시킨다.
  }, // err // ! 여기서 에러 발생 코드 입력.
);

app.get('/',(req, res, next) => {
  console.log('하나');
  next();
}, (req, res, next) => {
  console.log('둘');
  const condition = true;
  if(condition){
    next('route');
  } else {
    next();
  }
}, (req, res,next) => {
  console.log('셋');
})
// ? next('route')는 app.METHOD() 또는 router.METHOD() 함수를 이용해 로드된 미들웨어 함수에서만 작동합니다. - 공식문서 -

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  // ? res.sendFile에는 절대경로가 들어가야한다. 경로처리는 path내장모듈을 사용하면 편리하다.
  // ? res.sendFile에는 option객체를 이용해서 root경로 처리를 따로 해줄 수 있다.
  // ? 응답헤더의 Content-Type에는 인자에 들어간 파일의 확장자명을 기반으로 자동 설정된다.
  // next();
  // * app.get, post, put 등에 들어가는 함수도 하나이 미들웨어 함수다. 즉 next를 호출한다면 같은 경로의 같은 http요청에 해당하는 
  // * 함수가 있다면 실행 시킬 수 있다는 것.

  // app.use(cookieParser())로 쿠키파서 모듈을 사용하면 req.cookies로 미들웨어에서 쿠키를 받을 수 있다.
  req.cookies // { mycookie: 'test' } 
  // TIL/http/cookie&session/cookie2.js에서는
  // res.writeHead(302, {
    // Location: '/',
    // 'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
  // })
  // 이렇게 헤더를 설정할 때 문자열로 하나하나 찍어줬지만 express에서는
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 1);
  res.cookie('myname', encodeURIComponent('바보'), {
    expires: expires,
    httpOnly: true,
    path: '/'
  })
  console.log(decodeURIComponent(req.cookies.myname)); // req.cookies로 간단하게 쿠키를 파싱할 수 있다. 한글은 decodeURIComponent로 별도 파싱.
  res.clearCookie('myname', encodeURIComponent('바보'), {
    httpOnly: true,
    path: '/'
  })
});


// app.get('/', (req, res) => {
//   console.log('왜 실행이 안되는거야.'); // 위에서 next호출 시 실행되는 것을 확인할 수 있다.
// })

app.post('/', (req, res) => {
  res.send('POST요청 들어옴요.');
});

app.get('/about', (req, res) => {
  try {
    // res.send('this is about page');
    console.log(이렇게만해도에러는발생함)
  } catch (error) {
    next(error);
    // * next('route')를 제외하고 next에 인자가 있으면 어떠한 에러가 발생했다라고 인지한다.
    // * 그리고 소스코드 하단에 쓰여진 에러처리 미들웨어까지 내려간다.
  }
});

app.use((req, res, next) => {
  res.status(418).send('요청 잘못 보냄요.');
  // ? 모든 라우터들을 거치고 난 후 해당하는 라우터가 없을 시. 클라이언트에서 요청을 잘못보냄을 뜻함.
  // ? 소스코드 하단부에서 404처리를 해주면 된다.
});

app.use((err, req, res, next) => {
  console.log('오류감지. 오류 로깅 미들웨어 실행');
  console.error(err);
  // * 위에서 next(err)를 통해 에러를 받고 다시 에러를 내려줄 수 있다.
  next(err);
  // * 여기서는 에러를 콘솔에 찍는 것만 하고 아래 에러처리 미들웨어에서 최종적으로 클라이언트에게 500상태코드와 '서버에러남'을 send하게 되는 구조.
});

app.use((err, req, res, next) => {
  // ! 에러처리를 하는 미들웨어의 경우 반드시 인자를 4개 넣어야한다. 소스 코드의 최하단에 위치하는 것이 좋음.(위에서 난 모든 에러를 아래에서 다 받을 수 있다.)
  res.status(500).send('서버에러남');
})

app.listen(app.get('port'), () => {
  console.log(`서버잘돌아감 ${app.get('port')}포트 사용중`);
})