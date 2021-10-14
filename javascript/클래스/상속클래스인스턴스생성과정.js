class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }

  // static isOwnPrototypeMethod = (method) => {
  //   return this;
  // }

  static showPrototype(){
    return this.prototype;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  toString() {
    return `${super.toString()}, color = ${this.color}`;
  }

  // static isOwnPrototypeMethod = () => {
  //   return super.isOwnPrototypeMethod();
  // }

  static showPrototype() {
    return super.showPrototype();
  }
}

const colorRectangle = new ColorRectangle(2, 4, 'black');
const rectangle = new Rectangle(2, 4, 'black');

console.log(colorRectangle); // ColorRectangle { width: 2, height: 4, color: 'black' }

console.log(colorRectangle.getArea()); // 8
console.log(colorRectangle.toString()); // width = 2, height = 4, color = black

console.log(Rectangle.showPrototype());
console.log(ColorRectangle.showPrototype());
// 화살표 함수로 처리했을 때와 비교 가능(화살표함수는 메서드 축약 표현은 차이가 있다.)

console.log(Rectangle.showPrototype() === rectangle.__proto__) // true
console.log(ColorRectangle.showPrototype() === colorRectangle.__proto__) // true

console.log(colorRectangle.__proto__)
console.log('-------------')


// ? 서브클래스의 인스턴스 생성과정
// * 1. 서브클래스의 super호출
// 자바스크립트 엔진은 클래스를 평가할 때 수퍼클래스와 서브클래스를 구분하기위해 내부 슬로 [[ConstructorKind]]를 만들고 
// 수퍼클래스는 [[ConstructorKind]]의 값이 'base', 서브클래스는 [[ConstructorKind]]의 값이 'derived'가 된다.
// ! 클래스는 new 연산자와 함께 호출 되서 인스턴스를 만들게 되는데, 이때 [[ConstructorKind]]의 값을 보고 동작 방식을 구분한다.
// [[ConstructorKind]]의 값이 'base', 즉 수퍼클래스면 암묵적으로 빈 객체를 생성하고 이를 this에 바인딩한다.
// [[ConstructorKind]]의 값이 'derived', 즉 서브클래스면 자신이 인스턴스를 직접 생성하지 않고 수퍼클래에게 인스턴스 생성을 위임한다.
// 이런 이유로 서브클래스의 constructor에서 '반드시 super를 호출해야만 한다.'
// 서브클래스가 new 연산자와 함께 호출되면 constructor내부의 super 키워드가 함수처럼 호출되고, 수퍼클래스가 평가되어 생성된 함수 객체의 코드가 실행되기시작한다.(수퍼클래스의 constructor(super-constructor)가 호출된다.)
// 실제로 서브클래스도 인스턴스를 생성하는 주체는 수퍼클래스가 된다.

// * 2. 수퍼클래스의 인스턴스 생성과 this 바인딩
// 수퍼클래스의 constructor 내부의 코드가 실행되기 이전에 암묵적으로 빈 (인스턴스가 될)객체가 생성되고 this에 바인딩 된다.
// 이때 인스턴스는 수퍼클래스가 생성한 것이다. 히지만 new 연산자와 함께 호출된 클래스가 서브클래스라는 것이 중요하다.
// ! 즉, new 연산자와 함께 호출된 함수를 가리키는 new.target은 서브클래스를 가리킨다. 따라서 인스턴스는 new.target이 가리키는 서브클래스가 생성한 것으로 처리된다.
// 따라서 생성된 인스턴스의 프로토타입은 new.target, 즉 서브클래스의 prototype 프로퍼티가 가리키는 객체이다.
// ex)          ↓↓↓↓↓↓↓↓↓↓↓
class Base {
  constructor(name) {
    console.log(this) // Derived {}, constructor 내부코드 실행전 빈 객체를 먼저 생성한다.
    this.name = name;
    console.log(this);  // Derived { name: 'name' }, this에 바인딩 후 초기화.

    console.log(new.target); // [class Derived extends Base]
    console.log(Object.getPrototypeOf(this) === Derived.prototype); // true
    console.log(this instanceof Base); // true
    console.log(this instanceof Derived); // true
  }
}

class Derived extends Base {}
const de = new Derived('name');

// * 3. 수퍼클래스의 인스턴스 초기화
// 수퍼클래스의 constructor가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.(프로퍼티를 추가하고 constructor의 인자로 초기화 or 하드코딩된 값으로 초기화)

// * 4. 서브클래스 constructor로 복귀와 this바인딩
// super의 호출이 종료되고 제어 흐름이 서브클래스 constructor로 돌아온다. 이때 super가 반환한 인스턴스가 this에 바인딩된다.
// 서브클래스는 별도의 인스턴스를 생성하지 않고 super가 반환한 인스턴스를 this에 바인딩하여 그대로 사용한다.
// 이처럼 super가 호출되지 않으면 인스턴스가 생성되지 않으며, this 바인딩도 할 수 없다.
// 서브클래스의 constructor에서 super호출 전에 this를 참조할 수 없는 이유가 바로 이 때문이다. 

// * 5. 서브클래스의 인스턴스 초기화
// 서브클래스가 super()가 반환한 인스턴스를 받고 this에 바인딩했기 때문에 서브클래스의 constructor에 기술된대로 인스턴스 초기화 과정을 진행한다.

// * 6. 인스턴스 반환
// 클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.


// ? 참고
// map, filter 등으로 생성된 배열은 Array 생성자의 인스턴스다.(그 결과 값인 배열도 프로토타입 체이닝이 가능한이유)