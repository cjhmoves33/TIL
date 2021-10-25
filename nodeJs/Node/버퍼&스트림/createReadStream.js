const fs = require('fs');
const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 100});

const data = []
readStream
.on('data', chunk => {
  data.push(chunk);
  console.log('data: ', chunk, chunk.length);
})
.on('end', () => {
  const finish =  Buffer.concat(data).toString();
  console.log(finish);
})
.on('error', err => {
  throw err;
}) 
// ? 비동기처리를 할 때는 에러처리는 항상 해줘야한다.
// * createReadStream이 한번에 읽는 데이터크기의 기본값은 64KB(65536Bytes에 해당)이다. readme.txt은 크기가 작아서 기본값으로 데이터를 받아오면
// * createReadStream 이나 readFile이나 다를게 없다. 한번에 읽어오는 데이터의 크기를 줄이면 스트림 방식을 확실히 볼 수 있다.