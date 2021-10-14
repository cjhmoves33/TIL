// 상속에 의한 클래스 확장은 프로토타입 기반 상속과는 다른 개념이다. 프로토타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념이지만
// 상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장(extends)하여 정의하는 것이다.
// 상속에 의한 확장은 코드 재사용 관점에서 매우 유용하다.

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat(){}

  move(){}
  
  // static isAnimal = (target) => {
  //   return target instanceof this
  // }
  static isAnimal(target) {
    return target instanceof Animal;
  }
}

class Bird extends Animal {
  fly() {return 'fly';}
}

const bird = new Bird(1, 5);

console.log(bird);
console.log(bird instanceof Animal);
console.log(bird instanceof Bird);
console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());

/*
  Bird { age: 1, weight: 5 }
  true
  true
  undefined <-정의를 안했을뿐
  undefined <-정의를 안했을뿐
  fly
*/


// ?        extends 키워드
// 상속을 통해 클래스를 확장하려면 extends 키워드를 사용하여 상속받을 클래스를 정의한다.
// * 수퍼클래스와 서브클래스는 인스턴스의 프로토타입 체인뿐 아니라 클래스 간의 프로토타입 체인도 생성한다.
// * 이를 통해 프로토타입 메서드, 정적 메서드 모두 상속가능하다.

// Animal 클래스의 static method 상속
console.log(Bird.isAnimal(bird)); // true;


// ?        동적 상속
// * extends 키워드 다음에는 클래스뿐만 아니라 [[Construct]] 내부 메서드를 갖는 함수 객체로 평가될 수 있는 표현식(constructor인 함수객체)을 사용할 수 있다.
// 이를 통해 동적으로 상속받을 대상을 결정할 수 있다.

function Base1 () {}

class Base2 {}

let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
class Derived extends (condition? Base1 : Base2) {}

const derived = new Derived();

console.log(derived); // Derived {}
console.log(derived instanceof Base1); // true
console.log(derived instanceof Base2); // false


// ?        서브클래스의 constructor
// 기본적으로 클래스에서 constructor를 생략하면 빈 constructor가 암묵적으로 정의된다.
// 서브클래스에서 constructor를 생략하면 클래스에 다음과 같은 constructor가 암묵적으로 정의된다. args는 new 연산자와 함께 클래스를 호출할 때 전달한 인수의 리스트다.
// constructor( ...args ) { super( ...args )}
// *super()는 수퍼클래스의 constructor(super-constructor)를 호출하여 인스턴스르 생성한다.

class Parent {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Child extends Parent {
  constructor(a, b, c) {
    super(b);
    this.c = c;
  }
}

const bok = new Child('a', 'c');

console.log(bok) // Child { a: 'c', b: undefined, c: undefined }
//super()의 인자에 입력하지 않은 값은 undefined가 된 채로 상속된다.

class ChildTwo extends Parent {
  constructor(a, b, c) {
    super();
    this.c = c;
  }
}

const vung = new ChildTwo('hi', 'im', 'vung');
console.log(vung) // ChildTwo { a: undefined, b: undefined, c: 'vung' }
// constructor 내 super()는 수퍼클래스의 constructor()를 호출한 뒤 인스턴스를 생성한다고 했다.
// 그 과정을 자세히 생각해보자면 (뇌피셜)

// *  1. new와 함께 호출된 클래스 함수 객체는 클래스 내에 정의된 constructor에 적힌대로 인스턴스를 생성다.
// *  2. constructor내에 있는 super()가 가장 먼저 호출된다.
// *  3. super()는 수퍼클래스의 constructor()를 호출하게 되고 인스턴스가 될 객체(아직은 빈 객체)를 생성하고 this를 바인딩한다.
// *  4. 수퍼클래스의 constructor()에 맞게 빈 객체를 초기화한다.
// *  5. 이 과정이 끝나면 super()밑의 코드들이 실행된다. (ChildTwo의 경우 this.c = c;)
// *  6. 이미 this는 수퍼클래스의 constructor가 만든 객체에 바인딩 되어 있기 때문에 그 객체에 초기화를 이어 나간다.
// *  7. 인스턴스를 완성시키면 this를 반환.


