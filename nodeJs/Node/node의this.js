console.log(this);
console.log(this === module.exports);
console.log(module.exports === exports)

function show() {
  console.log(this === globalThis);
  console.log(this === global);
}
show();

// ? Node에서 전역스코프의 this는 module.exports를 가리킨다. 이것 말고는 브라우저에서의 this와 동일하다.
// ? 대신 함수 안에서 this는 global을 가리킨다.(전역스코프에서 호출 됐기때문)

const obj = {
  show,
}
obj.show();
// 메서드로서 호출될떄는 호출자에 this바인딩

function foo() {
  show();
}
foo();
// 함수 안에서 단독적으로 호출된것이기때문에 this가 global을 가리킨다.