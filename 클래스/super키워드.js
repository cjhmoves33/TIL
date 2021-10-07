
// super키워드는 함수처럼 호출할 수 도 있고, this와 같이 식별자처럼 참조할 수 도 있다.
// * super를 호출하면 수퍼클래스의 constructor(super-constructor)를 호출한다,
// * super를 참조하면 수퍼클래스의 메서드를 호출할 수 잇다.

class Superior {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Sub extends Superior{
  // 암묵적으로 constructor가 정의된다.
  // constructor(...args) {
  // super(...args);
  // }
}

const der = new Sub('a', 'b');
// console.log(der) // Sub { a: 'a', b: 'b' }

// ! super호출 시 주의사항
// 서브클래스에서 constructor를 생략하지 않은 경우 서브클래스의 constructor에는 반드시 super를 호출해야한다.
// 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다. 즉 constructor 최상단에서 super를 호출해야만 한다.
// super를 '호출'할 때에는 반드시 constructor에서만 해야한다.

// ?        super '참조'
// 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
class Base {
  constructor(name) {
    this.name = name;
  }
  
  sayHi() {
    return `hello, ${this.name}!`
  }
}

class Derived extends Base {
  sayHi() {
    console.log(super.constructor === Derived.prototype.__proto__.constructor)
    console.log(Object.getPrototypeOf(Derived.prototype).constructor === Derived.prototype.__proto__.constructor)

    // 1번 경우
    // const _super = Object.getPrototypeOf(Derived.prototype);
    // return `${_super.sayHi()}, how are you?` // -> hello, undefined!, how are you?

    // 2번 경우
    // const _super = Object.getPrototypeOf(Derived.prototype);
    // return `${_super.sayHi.call(this)}, how are you?` // -> hello, kim!, how are you?

    // 3번 경우
    return `${super.sayHi()}, how are you?` // ->hello, kim!, how are you?
  }
}

const derived = new Derived('kim');
console.log(derived.sayHi()) // hello, kim!, how are you?

// ? super참조가 수퍼클래스의 프로토타입을 찾는 방법은 이렇다.(super참조는 자신을 참조하고 있는 메서드가 바인딩되어 있는 객체의 프로토타입을 가리켜야한다.)
// * 메서드(ES6사양)는 내부 슬롯 [[HomeObject]]를 가지게 되는데 이 내부 슬롯은 자신을 바인딩하고 있는 객체를 가리킨다.
// * [[HomeObject]]을 통해 자신을 바인딩 하고 있는 객체의 프로토타입을 찾을 수 있게 된다.
// * Derived 클래스의 sayHi는 Derived.prototype에 바인딩 되어있다.
// * Derived 클래스의 sayHi의 [[HomeObject]]는 Derived.prototype를 가리키고
// * 이를 통해 Derived 클래스의 sayHi 내부의 super참조는 Derived.prototype.__proto__ 즉, Base.prototype을 참조 할 수 있게된다.(가리키게 된다.)
// * super.sayHi는 Base.prototype.sayHi를 가리키게 된다.

// ! 의문점
// Derived 에서 super와 Object.getPrototypeOf(Derived.prototype)이 가리키는 객체는 같다.
// 그치만 결과는 다르다. 위 Derived.sayHi메서드의 3가지 경우.
// 내 생각엔(정확한 해답을 찾기힘들다.) super는 2번의 경우를 내포하는 함수 같다.
// 1번의 경우 Object.getPrototypeOf(Derived.prototype)가 Base.prototype을 가리키고 있기 때문에 Base.prototype.sayHi()가 되서
// sayHi의 this가 Base.prototype를 가리키기 된다.


// [[HomeObject]]
const obj = {
  foo() {},
  // foo는 ES6의 메서드(메서드 축약 표현으로 정의한 메서드)다. [[HomeObject]]를 가진다.
  bar: function() {}
  // bar는 메서드라고 통칭하긴 하지만 ES6 사양의 메서드는 아니다.(일반 함수다.)
  // [[HomeObject]]를 갖지 않는다.
}
// 일반함수를 프로퍼티에 바인딩해서 메서드로 사용을 하면 [[HomeObject]]내부 슬롯을 가지지 않기 때문에 super참조를 할 수 없게된다.
// super는 클래스의 전유물이 아니다. 객체 리터럴에섣 super참조를 사용할 수 있다. 단 ES6의 메서드(메서드 축약 표현)로 정의된 함수만 가능하다.

const base = {
  name: 'lee',
  sayHi() {
    return `hi, ${this.name}`
  }
};

const derived2 = {
  __proto__: base,
  sayHi() {
    return `${super.sayHi()}, nice to meet you`;
  }
}
console.log(derived2.sayHi()); // hi, lee, nice to meet you


// 서브클래스의 정적 메서드 내에서 super.sayHi는 수퍼 클래스의 정적 메서드 sayHi를 기리킨다.
class Base2 {
  static sayHi() {
    return 'hi';
  }
}

class Derived2 extends Base2 {
  static sayHi() {
    return `${super.sayHi()} !!`
  }
}

console.log(Derived2.sayHi()) // hi !!