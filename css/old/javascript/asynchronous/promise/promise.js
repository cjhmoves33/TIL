// Promise is a Javascript Object for asynchronous operation.
// ? state의 이해가 중요함
// ? producer 와 consumer의 차이점을 잘 이해해야함. 정보 제공자, 정보 사용자

// * state: pending -> fulfilled or rejected
// * Producer vs Consumer

// * 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) -> 무거운 작업을 해야할 때 동기적으로 진행하게 되면 블로킹 이슈가 생기기 때문에 비동기적으로 처리해야할 필요가 있다.
  // 여기서 주의 해야할 점은 Promise객체를 생성하는 순간(지금의 경우에 전역 코드가 실행될 때 new Promise(executor)로 인해 바로 Promise객체가 생성되고 promise에 담긴것이다.)
  // new Promise의 인자인 executor(callback)을 즉시 실행한다. 이는 조건없이 Promise 객체가 생성될 경우 불필요한 executor호출(예를들면 네트워크 통신)이 발생 할 수 있음을 뜻한다.
  console.log('doing something...') 
  setTimeout(() => {
    resolve('user!!')
    // reject(new Error('no network'));
  }, 2000);

});

// * 2. Consumer: then, catch, finally
// ? then은 Promise객체를 리턴한다. 그렇기 때문에 then,catch의 체이닝이 가능한것.
promise
  .then((value) => {
    // 여기서 value는 promise의 executor가 정상적으로 작동을해서 resolve에 전달된 'user'가 전달된다.
    // 즉 .then은 Promise객체의 executor가 정상적으로 작동을해서 최종적으로 resolve에 전달한 값이 then의 콜백의 파라미터로 전달된다.
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => console.log('finally')); // resolve, reject에 상관없이 마지막을 실행할 함수.

// * 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
});
 
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num))


// * 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('닭'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
  // setTimeout(() => resolve(`${hen} -> '달걀`), 1000);
  setTimeout(() => reject(new Error(`error: ${hen} -> '달걀`)), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
  setTimeout(()=> resolve(`${egg} -> 후라이`), 1000);
});

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal))
getHen()
.then(getEgg)
.catch(error => `${error} -> 대체품(오류발생)`)
.then(cook)
.then(console.log)
.catch(console.log)
// 에러 핸들링