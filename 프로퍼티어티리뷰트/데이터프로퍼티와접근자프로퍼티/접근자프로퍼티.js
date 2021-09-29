// 접근자 프로퍼티(accessor property)는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장하 때 사용하는
// 접근자 함수(accessor function)로 구성된 프로퍼티다.

//                                              $$ 접근자 프로퍼티 $$

//    프러퍼티 어트리뷰트       프로퍼티 디스크립터 객체의 프로퍼티                         설명
//        [[Get]]                  get                    접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수다.
//                                                        즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값,
//                                                        즉, getter함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.

//        [[Set]]                  set                    접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 지정할 때 호출되는 접근자 함수다.
//                                                        즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 
//                                                        즉, setter함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다.

//   [[Enumerable]]            enumerable                 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.
//                                                        [[Enumerable]]의 값이 false인 경우 해당프로퍼티는 for...in 문이나 Object.keys메서드등으로 열거할 수 없다.
//                                                        '데이터 프로퍼티'의 [[Enumerable]]과 같다.

//  [[Configurable]]          configurable                프로퍼티의 재정의 가능여부를 나타내며 불리언 값을 갖는다.
//                                                        [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트의 값의 변경이 금지된다.
//                                                        단, [[Writable]]이 true인 경우, [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.
//                                                        '데이터 프로퍼티'의 [[Configurable]]과 같다.

// 접근자 함수는 getter/setter 함수라고도 부른다. 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고 하나만 정의할 수도 있다.


const person = {
  // 데이터 프로퍼티
  firstName: 'HeungMin',
  lastName: 'Son',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName);
// HeungMin Son

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
person.fullName = 'Park JiSung';
console.log(person)
// { firstName: 'Park', lastName: 'JiSung', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);
// Park JiSung

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
// { value: 'Park', writable: true, enumerable: true, configurable: true }

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
// { get: [Function: get fullName], set: [Function: set fullName], enumerable: true, configurable: true }


// person 객체의 firstName 과 lastName 프로퍼티는 일반적인 데이터 프로퍼티다. 메서도 앞에 get, set이 붙은 메서드가 getter/setter 함수이다.
// getter/setter 함수의 이름 fullName이 '접근자 프로퍼티'다. 접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트[[Value]])을 가지지 않으며
// 다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐이다.

// 이를 내부 슬롯/메서드 관점에서 설명하면 다음과 같다. 접근자 프로퍼티 fullName으로 프로퍼티 값에 접근하면 내부적으로 [[Get]] 내부 메서드가 호출되어 다음과 같이 동작한다.
//  1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야 한다. 프로퍼티 키 'fullName'은 문자열이므로 유효한 프로퍼티 키다.
//  2. 프로토타입 체인에서 프로퍼티를 검색한다. person 객체에 fullName 프로퍼티가 존재한다.
//  3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. fullName 프로퍼티는 접근자 프로퍼티다.
//  4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다. 
//     프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는
//     프로퍼티 디스크립터 객체의 get 프로퍼티 값과 같다.


// 일반 객체의 __proto__ 는 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// { get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }

// 함수 객체의 prototype은 데이터 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(function(){}, 'prototype'));
// { value: {}, writable: true, enumerable: false, configurable: false }