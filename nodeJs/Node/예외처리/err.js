// ? 자바스크립트에서는 예외(Exception)와 error를 크게 구분하지는 않는다. 
// ? 에러가 발생하면 스레드가 멈춘다. 노드는 싱글 스레드로 돌아가기 때문에 이는 곧 서비스가 멈춤을 의미한다.
// ? 기본적으로 try catch문으로 예외를 처리할 수 있다.

setInterval(() => {
  console.log('시작');
  try {
    throw new Error('에러코드발생!');
  } catch (err){
    console.log(err);
  }
}, 1000);

// 에러가 발생할 때 catch가 받게되고 작동이 멈추지 않는다. 
// 노드 내장모듈들은 기본적으로 비동기콜백에 에러를 받게 돼있는데, 거기에서 에러를 처리하면 별도로 catch문을 써주지 않아도 스레드가 멈추지는 않는다.
// 프로미스에는 catch를 꼭 붙이는 습관을 들이자.
// * 대신 console.error와 같이 최소한 에러가 발생했음을 인지할 수 있게 처리하는 등 별도의 예외처리가 반드시 필요하다.

