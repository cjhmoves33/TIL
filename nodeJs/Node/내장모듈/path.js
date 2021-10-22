// !! 내장모듈은 Node.js 공식문서에 API DOCS를 읽어보면 정확한 정보를 알 수 있다.

const path = require('path');
// 운영체제마다 경로 처리방식이 다르다. 경로 처리를 해야할 때는 path 모듈을 사용하자.

const path1 = path.join(__dirname);
const path2 = path.join('../','모듈화');
const path3 = path.join(__dirname, '..','모듈화/bar.js');
const path4 = path.join(__dirname, 'os.js');
const path5 = path.join(__dirname, '../..', 'process.js');
console.log(path1);
console.log(path2);
console.log(path3); 
console.log(path4);
console.log(path5);

const absolutePath = path.resolve('/var.js');
console.log(absolutePath)

// ? Mac, Linux를 합쳐서 POSIX라고 부른다.

console.log(path.delimiter)
// * 환경 변수의 구분자. process.env.PATH를 입력하면 여러개의 경로가 이 구분자로 구분되어 있다.
// * windows는 세미콜론이고, POSIX는 콜론이다.