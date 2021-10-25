const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');

readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('before: ', process.memoryUsage().rss);
})


// * 버퍼 방식으로 처리할 때보다 메모리 사용량이 확연히 줄어든 것을 확인할 수 있다.