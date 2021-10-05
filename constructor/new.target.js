// 생성자 함수가 new연산자 없이 호출되는 것을 방지하기위해 파스칼 케이스를 사용한다 하더라도 실수는 언제나 발생할 수 있다.
// ES6에서는 new.target(메타 프로퍼티)을 지원한다.(IE에서는 지원안한다. 스코프 세이프 생성자 패턴을 사용해야함.)

function Circle(radius) {
  // new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용된다.
  // 생성자 함수로서 호출되면 new.target은 함수 자신을 가르키고 일반 함수로서 호출되면 new.target은 undefined다.

  if (!new.target) {
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  }
}

const circle = Circle(5);
// new연잔자 없이 호출해도 생성자 함수로서 호출된다.