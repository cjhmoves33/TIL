// 함수가 실행되려면 '함수 코드 평가 과정'에서 생성된 함수 실행 컨텍스트가 호출 스택에 푸시되어야 한다.
// 다시 말해, 호출 스택에 함수 실행 컨텍스트가 푸시되는 것은 바로 함수 실행의 시작을 의미한다.
// 함수가 호출된 순서대로 순차적으로 실행되는 이유는 함수가 호출된 순서대로 함수 실행 컨텍스트가 호출 스택에 쌓이기 때문이다.
// * 자바스크립트 엔진은 단 하나의 호출 스택을 갖는다. 
// 이는 함수를 동시에 2개 이상 실행할 수 없다는 것을 의미하는데, 현재 실행 중인 실행 컨텍스트를 제외한 모든 실행 컨텍스트는 모두 실행 대기중인 태스크들이다.
// 대기 중인 테스크들은 현재 실행 중인 실행 컨텍스트가 팝되어 호출 스택에서 제거되면(현재 실행중인 함수가 종료되면) 비로소 실행 되기 시작한다.
// * 이처럼 자바스크립트 엔진은 한 번에 하나의 태스크만 실행할 수 있는 싱글 스레드(single thread)방식으로 동작한다. 
// * 싱글 스레드 방식은 한 번에 하나의 태스크만 실행할 수 있기 대문에 처리 시간이 걸리는 태스크를 실행하는 경우 블로킹(blocking, 작업중단)이 발생한다.

function sleep(func, delay) {
  const delayUntil = Date.now() + delay;
  while ( Date.now() < delayUntil) {;}
  func();
}

function foo() { console. log('foo'); }
function bar() { console. log('bar'); }

sleep(foo, 3 * 1000);
bar();

// 위 예제의 sleepㅎ마수는 3초 후에 foo 함수를 호출한다. 이떄 bar 함수는 sleep 함수의 실행이 종료된 이후에 호출되므로 3초이상 호출되지 못하고 블로킹된다.
// 이처럼 현재 실행 중인 태스크가 종료할 때까지 다음에 실행될 태스크가 대기하는 방식을 동기(synchronous)처리라고 한다.
// 동기 처리 방식은 태스크를 순서대로 하나씩 처리하므로 실행 순서가 보장된다는 장점이 있지만, 앞선 태스크가 종료할 때까지 이후 태스크들이 블로킹되는 단점이 있다.

function baz() {
  console.log('baz');
}

function bap() {
  console.log('bap');
}
setTimeout(baz, 3 * 1000);
bap();

// setTimeOut 함수는 앞서 살펴본 sleep 함수와 유사하게 일정 시간이 경과한 이후에 콜백을 호출하지만 이후 태스크를 블로킹하지 않는다.
// 현재 실행 중인 태스크가 종료되지 않은 상태라 해도 다음 태스크를 실행하는 방식을 비동기(asynchronous)처리라고 한다.
// 비동기 처리는 동기처리와 반대로 태스크의 실행순서가 보장되지 않는다는 단점이있다.

// 비동기 처리를 수행하는 비동기 함수는 전통적으로 콜백 패턴을 사용한다. 비동기 처리를 위한 콜백 패턴은 콜백 헬을 발생시켜 가독성을 나쁘게 하고
// 비동기 처리 중 발생한 에러의 예외 처리가 곤란하여, 여러 개의 비동기 처리를 한 번에 처리하는 데도 한계가 있다.