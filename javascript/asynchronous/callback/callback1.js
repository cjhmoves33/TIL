console.log('1')
setTimeout(() => {
  console.log('2')
}, 1000)
console.log('3');
// 비동기의 가장 기초적인 함수 setTimeout
// 참고로 알아두면 좋은점은 타이머 함수는 브라우저와 Node.js가 지원하는 API인 호스트 객체이다.

// callback은 간단하게 말하자면 함수의 인자로 들어가는 함수를 말한다.
// 함수가 호출되면 그 인자로 전달된 함수를 호출하기 때문에 callback이라고 부른다.
// callback은 동기,비동기 함수로 나눌 수 있다.

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async hello'), 2000);
// 호출 스택에는 printWithDelay함수의 실행컨텍스트가 동기적으로 올라갔다가 호출 스케줄링을 (지금은)브라우저에게 넘기고 함수가 종료된다(실행컨텍스트가 팝된다.).
// 브라우저가 백그라운드에서 타이머를 돌리고 타이머가 끝나면 태스크 큐로 콜백을 옮긴다.
// 전역 소스코드 실행이끝나면(전역 실행컨텍스트까지 호출 스택에서 팝되고나면) 테스크 큐에서 호출 스택으로 해당하는 콜백 함수의 실행컨텍스트를 생성하고 호출 스택에 푸시한다.
// 이 코드 전체를 보자면 맨 위에있는 console.log('2')가 타이머가 짧기때문에 태스크큐에 가장 앞에 가게 되고 그 다음 console.log('async hello')이 가게 된다.

setTimeout(() => {
  console.log('1');
  setTimeout(() => {
    console.log('2')
    setTimeout(() => {
      console.log('3')
    },100)
  }, 200);
}, 300)
// 콜백지옥의 기초적인 원리

