process.on('uncaughtException', (err) => {
  console.error(`
--- 에러발생 기록 ---
시간: ${new Date}
내용: ${err}
------------------
  `);
});

setInterval(() => {
  throw new Error('멈춰라 서버!');
}, 1000);

setTimeout(() => {
  console.log('잘 돌아가네');
}, 2000);

// ? process.on('uncaughtException', 콜백)은 해당파일에서 발생하는 에러를 전부 모아준다. 하지만 절대 만능해결책이 아니다. 단순히 에러로그 기록용으로 사용해야한다. 
// ? 공식문서에 따르면 '해당 메서드의 콜백이 에러에 대한 모든 동작을 보장하지 않는다' 고한다. 즉 uncaughtException에서 에러를 받아서 바로 복구하려하면 안된다는 것이다. 기록용으로는 용이함.