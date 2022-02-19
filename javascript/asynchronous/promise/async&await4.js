var resolveAfter2Seconds = function () {
  console.log('starting slow promise');
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(20);
      console.log('slow promise is done');
    }, 2000);
  });
};

var resolveAfter1Second = function () {
  console.log('starting fast promise');
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(10);
      console.log('fast promise is done');
    }, 1000);
  });
};

var sequentialStart = async function () {
  console.log('==SEQUENTIAL START==');

  // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
  const slow = await resolveAfter2Seconds();
  console.log(slow);

  const fast = await resolveAfter1Second();
  console.log(fast);

  const finalTime = Date.now();
  console.log('소요시간: ', (finalTime - startTime) / 1000, '초');
};

var concurrentStart = async function () {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second();

  console.log(await slow);
  console.log(await fast); // waits for slow to finish, even though fast is already done!
};

var stillConcurrent = function () {
  console.log('==CONCURRENT START with Promise.all==');
  Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    }
  );
};

var parallel = function () {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
};

const startTime = Date.now();

sequentialStart(); // 2초 후 'slow' 그 뒤로 1초 후 'fast' -> 총 3초 소요

setTimeout(concurrentStart, 4000); // 2초 후 'slow' 곧바로 'fast' -> 총 2초 소요

setTimeout(stillConcurrent, 7000); // 위와 동일

setTimeout(parallel, 10000); // 1초 후 'fast' 그 두로 1초 후 'slow' -> 총 2초 소요
