const { odd, even } = require('./bar');
const summary = require('./모듈화');
// ./모듈화.js에서 export한 값의 이름은 sum인데 받을 때는 summary로 받을 수 있는가? -> yes
// 단순 변수명 이기에 가능. module.exports는 파일당 단 한번만 할 수 있기 때문에 단 하나의 값을 하나의 다른 변수명에 할당하는 꼴임.
// 맨위에서 볼 수 있듯이 구조분해로가져올때는 프로퍼티명으로 가져와야기하기 때문에 기본적으로는 프로퍼티 명을 정확히 기재해야한다.

function allSum(...args) {
  return args.reduce((acc, cur) => (+acc) + (+cur));
};

console.log(allSum(odd, even, summary));

module.exports = allSum;
// 함수 자체를 export하는 것도 가능하다.