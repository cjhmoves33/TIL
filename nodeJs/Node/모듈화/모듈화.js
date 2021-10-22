// ? 모듈 만들기
// 같은 폴더 내에 bar.js, foo.js 만들기

// require는 node가 기본제공하는 함수
// const value = require('./bar');
// console.log(value)

const { odd, even } = require('./bar'); // 구조 분해로 받아오기
console.log(odd);
console.log(even);

const sum = ((a, b) => {
  // console.trace(new Date)
  // console.table(a)
  return Number(a) + Number(b);
})(odd, even);

// module.exports = {
//   sum,
//   odd,
//   even
// }
// 다른 모듈에서 가져온 값이라도 그대로 export가능.
// ? 주의할 점은 module.exports는 해당 파일에서 단 한번만 사용이 가능하다.

module.exports = sum;

// 모듈화를 하면 파일별로 공통되는 변수, 함수, 객체 등등을 공유하며 사용할 수 있다. 불필요한 재정의가 없어짐.

// ? require('path'), module.exports는 노드에서 지원하는 모듈시스템이고
// ? import from 'path', export, export default는 자바스크립트에서 지원하는 모듈이다.
// ? 서로 지원을 할 수는 있으나 1대1 대응이되는 것은 아님.
