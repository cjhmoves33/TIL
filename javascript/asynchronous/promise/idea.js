// !! 의문 점에 대한것 들을 작성 한곳. non-official

// ? Promise는 then 체이닝 자체는 소스코드 실행시 알단 동기적으로 모두 실행 되는가?
const promise1 = new Promise((resolve, reject) => {
  console.log('첫번째');
  // resolve(200);
  setTimeout(() => {
    resolve(200);
  })
})
console.log(promise1);


const promise2 = new Promise((resolve, reject) => {
  console.log('두번째');
  resolve(200);
  // reject(404);
})
.then(ok => {
  console.log('promise2의 첫번째 then: ', ok)
  return ok;
})
.then(ok => {
  console.log('promise2의 두번째 then: ',ok + '!')
  return ok;
})
.catch(err => {
  console.log(err)
})
console.log(promise2);
setTimeout(() => console.log('NOW promise2: ', promise2), 1000);

// * 코드를 실행 시켜보면 new Promise의 콜백은 동기적으로 실행되는 것을 확인 할 수 있다.
// * 비동기 처리는 new Promise의 콜백 안에서 이루어지는데 지금 setTimeout으로 비동기 처리를 하는거처럼 가정한다.
// * 비동기 처리가 끝나기전(resolve가 호출되기전엔) promise1은 대기상태의 프로미스 객체이고
// * 비동기 처리가 끝나면 promise1은 (여기선)이행상태인 프로미스객체가 된다.
// // * console.log(promise1)의 결과를 보면 이행 상태의 Promise객체를 찍고(비동기처리없이 바로 resolve를 호출한경우)
// * console.log(promise2)의 결과를 보면 대기 상태의 Promise객체를 찍는것을 확인할 수 있다.
// * promise2의 경우 .then으로 메서드 체이닝을 한것을 알 수 있는데 이는 promise2가 단순히 new Promise로 만든 프로미스 객체가 아닌
// * 그 이행상태에 따른 다음 Promise객체의 .then의 호출 값을 보여줌을 뜻한다.
// ? promise2 첫 프로미스 객체 생성의 시기에는 이행된 상태의 프로미스객체이다. 그걸 then이 받은 상태
// * then의 콜백은 비동기로 이뤄진다. 그치만 then의 호출은 (현재 코드 상에서는)동기적으로 이루어진다. console.log(promise2)가 대기상태의 promise2를 찍는 이유이다.
// * setTimeout으로 console.log의 호출을 promise의 처리 뒤로 보낸 뒤 결과를 확인하면 이행 상태의 프로미스 객체를 찍는 것을 확인할 수 있다.

console.log('----------------------------------------')
const printer = (target) => console.log(target);

const promise3 = new Promise((resolve, reject) => {
  const target = 'hello';  
  printer(target);
  setTimeout(() => printer(`promise3 setTimeout: ${target}`), 1000);
  resolve(target);
})
console.log(promise3);

const promise4 = new Promise((resolve, reject) => {
  const target = 'world';
  printer(target);
  setTimeout(() => printer(`promise4 setTimeout: ${target}`), 1000);
  resolve(target);
})
.then(target => {
  printer(`promise4의 첫번째 then: ${target}`)
  return target
})
.then(target => {
  printer(`promise4의 두번째 then: ${target}`)
  return new Promise((resolve, reject) => {
    resolve(target);
  })
})
console.log(promise4);
setTimeout(() => console.log('NOW promise4:', promise4), 1000)
console.log('-------------------------- 여기가 동기 처리의 마지막 부분 --------------------------')

// * promise4의 경우도 동기적으로 then호출 까지는 동기적으로 실행이 되는 겉다. 그래서 console.log(promise4)의 결과값이 대기상태의 프로미스 객체임을 볼 수 있다.

// ? Promise.then()은 이전 Promise객체(then이 반환하는 것도 포함)의 상태가 대기상태면 그 프로미스의 이행여부가 결정돠고 나서 그 결정을 따른다.
// ? 즉 then메서드는 전 Promise함수의 이행여부 결과를 계속 기다린다는(return을 기다리는) 것을 의미할까?

// * 비동기처리는 코드의 순서를 보장하지 못한다는 특징이 있다. 하지만 엄밀히 따지자면 그 또한 순서가 있다.(물론 서버와 통신을 해야하고 그 무게 무거다면 얘기가 달라질 수 있겠지만)
// * 지금은 무거운 코드의 처리도 아니고 서버와의 통신도 아니니까 일단 정헤진 순서를 확인할 수 있고 이것으로 promise와 then의 처리 방식을 짐작할 수 있다.

// * 일단 큰 틀을 보자
// * 프로미스의 모든 비동기처리(then의 콜백)가 끝이나고 setTimeOut이 호출된 순서대로 실행됐다.(모든 타이머의 시간이 동일 하기 때문에 호출순서대로 찍힌것임)

// * 그리고 프로미스의 콜백호출의 순서를 보면 promise2의 첫 번째 then이 실행되고 promise4의 첫 번째 콜백이 호출됐다.
// * 즉 하나의 프로미스의 then 체인을 한번에 끝내는 것이아니라 then 체이닝 한번 당 새로운 비동기 호출을 하고 태스크큐(지금은 마이크로 태스크큐가 뭔지 모르니 태스크큐로 통창함)에
// * 다음 순서로 있는 콜백을 실행하고 (이것이 promise4의 콜백) 그리고 이것도 then 체인으로 연결 된 것이기 때문에 새로운 비동기 호출을 한다.
// ? 이 순서대로 작업이 이루어 지기때문에 논 블로킹이 자연스럽게 이루어지는거같다. 그리고 프로미스의 비동기 실행 순서가 콘솔의 결과처럼 나오는 듯하다.

// ? 여기서 한 예시는 서버와의 연동이 없기 때문에 실제 서버 요청을 해야하는 경우 어떤 식으로 사용할 수 있을지에 대해서도 생각해 봐야할거같다.



// ! 수정사항
new Promise((resolve, reject) => {
  resolve();
})
new Promise((resolve, reject) => {
  setTimeout(()=>resolve(), 2000);
})
// 이런 형태의 프로미스는 사실 비동기 처리의 예시는 아니라는 생각이든다.
// 프로미스의 콜백 안에서 비동기 처리후 resolve를 호출 하게끔 구현을 해야 비동기 처리의 예시로서 사용 가능한거같다.
// 비동기 처리를 안하고 바로 resolve를 호출한 형태는 사실 이행된 상태의 프로미스 객체를 뜻 함과 다를 바 없기 때문이다.