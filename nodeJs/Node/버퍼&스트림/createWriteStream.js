const fs = require('fs');
const writeStream = fs.createWriteStream('./writeme.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});
// 'finish'는 이벤트리스너 인데 파일 쓰기가 종료되면(writeStream.end가 호출되면) finish이벤트가 발생한다.

writeStream.write('글 쓰기를 시작합니다. \n');
writeStream.write('어쩌구 저쩌구. \n');
writeStream.write('글쓰기를 종료합니다. \n');
writeStream.end('no more writeable');
// write로 데이터를 나눠서 쓴다면 메모리 효율을 높일 수 있을 것이다.
