// 생성자 함수에 의한 객체 생성 방식은 마치 인스턴스를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여
// 프로퍼티 구조가 동일한 여러 개의 객체를 간편히 생성할 수 있다.

function Circle(radius) {
  // 생성자함수 또는 클래스는 파스칼 케이스로 네이밍한다.
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.(생성자 함수로써 호출될 경우에만 !)
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circleOne = new Circle(5); // 생성자 함수로써 함수를 호출했다.
const circleOne = new Circle(10); 
