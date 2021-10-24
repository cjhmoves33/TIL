const promise = new Promise((resolve, reject) => {resolve()});
// promise.then(result => result);

async function main() {
  const result = await promise;
}
main();

// * 예전에는 await로 프로미스를 호출하기 위해서 async함수를 만들고 그안에서 await를 호출하고 그 함수를 호출하는 형식으로 했어야 했지만 현재는 top level await라는게 생기면서
// * 단독으로도 사용이 가능하다.

// const result = await promise();
// top level await라는 것이 있지만 사용법을 모르겠다.

async function main2() {
  const result = await promise;
  // return 'hi'
  return result;
}
// * async 함수로 리턴 받은 값은 then으로 받아야한다. 결국 async 함수도 프로미스를 반환하기 때문임.

main2().then(some => some);
// 아니면
// const some = await main2();


async function main3() {
  try {
    const result = await promise;
    return result;
  } catch (err) {
    console.log(err);
  }
}
main3().then(some => some);
// * async 함수는 reject에 대한 처리가 없기 때문에 내부에서 try catch문으로 해결해야한다.


// ? for await(변수 of 프로미스 배열)
// resolve된 프로미스가 변수에 담겨 나옴
// await을 사용하기 때문에 async 함수 안에서 사용해야함
const promise1 = Promise.resolve('success1');
const promise2 = Promise.resolve('success2');
(async () => {
  for await (prom of [promise1, promise2]) {
    console.log(promise);
  }
})();