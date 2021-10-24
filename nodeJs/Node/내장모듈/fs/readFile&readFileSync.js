const fs = require('fs');

// * readFile 과 readFileSync

console.log('fs.readFile 시작');
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('readFile 1번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('readFile 2번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('readFile 3번', data.toString());
});
console.log('fs.readFile 끝');


// 서버가 작동 중인 시점에서는 비동기 작업을 하는 것이 좋다. 파일을 동기적으로 불러들여도 될때는 서버를 켜기전 서버를 초기화하는 단계 정도이다.
console.log('fs.readFileSync 시작');

let sync = fs.readFileSync('./readme.txt');
console.log('readFileSync 1번', sync.toString());

sync = fs.readFileSync('./readme.txt');
console.log('readFileSync 2번', sync.toString());

sync = fs.readFileSync('./readme.txt');
console.log('readFileSync 3번', sync.toString());

console.log('fs.readFileSync 끝');