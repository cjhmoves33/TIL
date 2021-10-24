const fs = require('fs');
const fsPromise = fs.promises;

// console.log(fs)

// * readFile 함수는 콜백을 받는데 콜백의 인자를 error, data 순으로 받는 것을 볼 수 있다.
// * 노드에서는 대부분 콜백의 인자를 받을 때 error, data 순으로 받는다.
// ? 참고로 fs.readFile 메서드는 비동기 함수다.
// ? 동기 메서드는 fs.readFileSync를 사용하면 된다.(순서대로 처리할 수 있음.)

fs.readFile('./readme.txt', (err, data) => {
  let temp = [];
  if(err) {
    throw err;
  }
  console.log(data);
  // console.log(data.toString('utf-8'));

  console.log('------ 콜백 fs ------');
  temp.push(data);
  temp = Buffer.concat(temp).toString();
  console.log(temp);
})



// * 기존에 콜백패턴인 fs.readFile()을 프로미스 패턴으로도 지원한다.

fsPromise.readFile('./readme.txt')
.then(buffer =>{
  console.log('------ 프로미스 fs ------');
  console.log(buffer);
  console.log(buffer.toString());
})
.catch(err => {
  throw err;
})


fsPromise.writeFile('./writeMe.txt', '글쓰기') // 이 부분만 입력해도 파일을 생성할 수 있다.
.then(() => fsPromise.readFile('./writeMe.txt'))
.then (buffer => console.log(buffer.toString()))
.catch(err =>{
  throw err;
})
