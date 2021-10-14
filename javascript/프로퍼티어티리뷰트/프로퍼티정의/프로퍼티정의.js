// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나,
// 기존 프로퍼티의 프로퍼티 어티르뷰트를 재정의 하는것을 말한다.
// 예를 들면 프로퍼티 값을 갱신가능하게 할 것인지, 프로퍼티를 열거 가능하도록 할 것인지, 프로퍼티를 재정의 가능하도록 할 것인지 정의할 수 있다.

// Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다. 
// Object.defineProperty(객체의 참조, 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터);

const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Lee',
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, 'lastName', {
  value: 'bok',
});

let descriptor = Object.getOwnPropertyDescriptors(person);
console.log(descriptor);
// {
//   firstName: {value: 'Lee', writable: true, enumerable: true, configurable: true},
//   lastName: {value: 'bok', writable: false, enumerable: false, configurable: false}
// }
// 디스크립터 객체의 프로퍼티를 생략하면 undefined, false가 기본값이다.

// [[Enumerable]]이 false인 경우 해당 프로퍼티는 for..in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person));
// [ 'firstName' ]
for (let key in person) {
  console.log(key);
}
// firstName


// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = 'BOK';
console.log(person.lastName); 
// bok

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;
console.log(person.lastName);
// bok

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'lastName', { enumerable: true });
// TypeError: Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName { value: 'bok', writable: false, enumerable: false, configurable: false }


// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
  // getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// fullName { get: [Function: get], set: [Function: set], enumerable: true, configurable: true }

console.log(person.fullName);
// Lee bok
person.fullName = 'lee SeungHo';
console.log(person.fullName);
// lee bok


// Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의할 수 있다. Object.defineProperties 메서드를 사용하면 여러개의 프로퍼티를 한 번에 정의 할 수 있다.
const personTwo = {};

Object.defineProperties(personTwo, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'buk',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  // 접근자 프로퍼티 정의
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(fullName) {
      [this.firstName, this.lastName] = fullName.split(' ');
    },
    enumerable: true,
    configurable: true,
  }
});

console.log(personTwo.fullName);
// buk Lee
personTwo.fullName = 'seungho lee';
console.log(personTwo.fullName);
// seungho lee