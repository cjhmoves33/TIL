const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i = 0; i <= 10_000_000; i++) {
  file.write(`엄청 나게 큰 파일을 만드는 작업 ${i} 번째 줄!`);
}
file.end();