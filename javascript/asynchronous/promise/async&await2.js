const testPromise = (interval) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('이행');
    }, interval);
  });
};

const testAwait = async () => {
  console.log('async함수는 기본적으로 대기상태의 Promise가 된다.');
  console.log(
    '이때 내부에서 await를 만나게되면 해당함수 내부가 동기적으로 실행되기 때문에'
  );
  console.log(
    'await로 처리중인 비동기 함수를 처리 하는동안 async함수 내부는 잠시 중단되고'
  );

  await testPromise(1000);

  console.log('다시 async내부로 들어와서 코드를 실행시킨다.');
  console.log('만약 await가 더 있다면?');

  await testPromise(1000);

  console.log(
    '최종적으로 await처리가 끝나면 async 함수는 이행/거절 상태의 Promise가 되고'
  );
};

console.log('바깥 함수들을 먼저 실행시키게 한다. 즉, 제어권을 외부로 넘긴다.');

testAwait().then(() => {
  console.log('then으로 넘어오게된다.');

  const endTime = Date.now();
  const over = endTime - startTime;

  console.log('경과 시간: ', over / 1000, ' 초');
});

setTimeout(() => {
  console.log('또 제어권을 넘기고 먼저 실행되야하는 코드가 있다면 실행된다.');
}, 1500);

const startTime = Date.now();

console.log('외부 함수들의 실행이 끝나서 호출스택이 비워지고나면');
