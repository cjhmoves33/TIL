// ? createReadStream으로 파일을 읽고, createWriteStream으로 파일을 쓸 수 도있다. 스트림끼리 연결하는 것을 '파이핑'이라고 한다.

const fs = require('fs');
const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 100});
const writeStream = fs.createWriteStream('./writedmePIPE.txt');

readStream.pipe(writeStream);
// *readStream으로 파일을 읽어서 바로 writeStream으로 파일을 쓸 수 있게 pipe를 연결 한 것이다.(지금은 파일 복사와 동일한 동작 -옛날방식-)

const writeStreamToZg = fs.createWriteStream('./writedmePIPE.txt.gz');
const zlib = require('zlib');
const zlibSteam = zlib.createGzip();
readStream.pipe(zlibSteam).pipe(writeStreamToZg);
// * zlib.createGzip은 파일을 압축한다.
// * 버퍼 데이터가 전달되다가 gzip압축을 거친 후 파일로 써진다.
// * pipe은 스트림을 지원하는것들 끼리 파이핑을할 수 있다.
