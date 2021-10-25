const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data);

console.log('before: ', process.memoryUsage().rss);

// * 버퍼 방식으로 데이터를 처리하면 메모리 사용량이 해당 파일의 크기만큼 커진다. 스트림 방식과 비교가 필요하다.