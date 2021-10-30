// ? util
// * 각종 편의 기능을 모아둔 모듈
// * deprecated, promisify가 자주쓰임
// 노드로 프로그램을 만들었고 남들이 그 프로그램을 사용한다고 가정. 별로 좋지 않은 코드를 발견했다고 그 코드를 그냥 지워버리거나 할 수는 없다. 
// 코드를 함부로 지우면 그 코드를 쓰던 사람들의 프로그램이 전부 망가져버린다. 예를 들어 import from (ES2015)모듈방식이 나왔지만 노드에서 CommonJS방식인 require를 없애지 못하는 것과 같음.
// 잘못만든 코드가 있다면 util.deprecated로 알려줄 수 있다.

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated 되었으니 사용하지 마세요.');
dontUseMe(1,2);
// 사람들에게 이 함수는 deprecated된 함수이니 사용하지 말것을 알리고 사람들이 다른 함수를 사용하게끔 한다.

const randomBytePromise = util.promisify(crypto.randomBytes);
randomBytePromise(64)
.then(buf => {
  console.log(buf);
  console.log(buf.toString('base64'));
})
.catch(err => {
  console.log(err);
});

// * 자바스크립트는 콜백에서 프로미스 기반으로 많이 넘어가고있지만 콜백을 쓰던 함수를 없앨 수 는없다. 특히 노드에서는 아직 프로미스를 지원하지않는 코드들이 많이있다.
// * 그때 사용하는것이 util.promisify이다. async await 문법을 사용할 수 없어 엄청 불편해지기 때문에 promisify에 감싸줘서 프로미스를 지원하게 바꿔준다고한다.
// 아직 직접적으로 사용해보지를 않아서 어떤 것들이 어떤식으로 불편해지는건지는 모르겠다..
// * util.promisify로 콜백 패턴을 프로미스 패턴으로 바꿀때 유의해야할 점이 있다.
// * 콜백의 형태가 (err, data) => {}형식이여야한다. 이게 안지켜지면 바꾸지 못하지만 Node함수들은 거의 (err, data)=>{} 형식을 가지고 있다.
// ? callbackify도 있지만 쓰는 사람이 없다..