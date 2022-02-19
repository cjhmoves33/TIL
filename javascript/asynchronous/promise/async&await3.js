const testPromise = (interval) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('이행');
    }, interval);
  });
};

const testAwait = async () => {
  const result = testPromise(2000);
  const result2 = testPromise(2000);
  // console.log(result);
  // await result;
  // console.log(result);
  // await result2;
  // return result;
};

console.log(testAwait());

// const state = testAwait().then(() => {
//   const endTime = Date.now();
//   const over = endTime - startTime;
//   console.log('경과 시간: ', over / 1000, ' 초');
//   // return 'hi';
// });

const startTime = Date.now();
