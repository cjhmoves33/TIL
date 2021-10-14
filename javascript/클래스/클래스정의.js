// 클래스 선언문
class Person {};
// 클래스 표현식
const Person = class {};
// 기명 클래스 표현식
const Person = class MyClass {};

// 클래스를 표현식으로 정의할 수 있다는 것은 클래스가 값으로 사용할 수 있는 일급 객체라는 것을 의미한다.
// 클래스는 일급 객체로서 다음과 같은 특징을 갖는다.
// 1. 익명 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

// 클래스는 함수다. 따라서 일급 객체다.
// 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드 세 가지가 있다.


// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log('hi, my name is ' + this.name);
  }

  // 정적 메서드
  static sayHello() {
    console.log('hello');
  }
}

// 인스턴스 생성
const me = new Person('name');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // name
// 프로토타입 메서드 호출
me.sayHi() // hi, my name is name
// 정적 메서드 호출
Person.sayHello() // hello


// 생성자 함수로 인스턴스를 만드는 방식이 클래스의 constructor가 한다.
// 생성자함수.prototype.sayHi = function(){...}와 클래스 내부에 작성한 (프로토타입)메서드와 같다.
// 생성자함수.sayHello = function(){...}와 클래스 내부에 작성한 (정적)메서드와 같다.

// 클래스와 생성자 함수의 정의 방식은 형태적인 면에서 매우 유사하다.