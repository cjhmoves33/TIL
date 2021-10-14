
//                                              $$ 데이터 프로퍼티 $$

//    프러퍼티 어트리뷰트       프로퍼티 디스크립터 객체의 프로퍼티                         설명
//      [[Value]]                value                    프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
//                                                        프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당한다.
//                                                        이때 프로퍼티가 없으면 프로퍼티를 동적으로 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다.

//    [[Writable]]              writable                  프로퍼티 값의 변경 가능여부를 나타내며 불리언 값을 갖는다.
//                                                        [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기전용 프로퍼티가 돤다.

//   [[Enumerable]]            enumerable                 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.
//                                                        [[Enumerable]]의 값이 false인 경우 해당프로퍼티는 for...in 문이나 Object.keys메서드등으로 열거할 수 없다.

//  [[Configurable]]          configurable                프로퍼티의 재정의 가능여부를 나타내며 불리언 값을 갖는다.
//                                                        [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트의 값의 변경이 금지된다.
//                                                        단, [[Writable]]이 true인 경우, [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.



const person = {
  name: 'Lee',
  isPerson: true,
};
// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'Lee', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person, 'isPerson'));
// { value: true, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// undefined

// Object.getOwnPropertyDescriptor 메서드가 반환한 프로퍼티 디스크리터 객체를 살펴보면 value 프로퍼티의 값은 각각 'Lee', true이다.
// 이것은 프로퍼티 어트리뷰트 [[Value]]의 값이 각각 'Lee', true 임을 의미한다. 그리고 writable, enumerable, configurable의 값은 모두 true이다.
// 이것은 프로퍼티 어티르뷰트 [[Writable]], [[Enumerable]], [[Configurable]] 의 값이 모두 true인 것을 의미한다.

// 이처럼 프로퍼티가 생성될 때 [[Value]]의 값은 프로퍼티 값으로 초기화되며 [[Writable]], [[Enumerable]], [[Configurable]]의 값은 true로 초기화된다.
// 이것은 프로퍼티 동적추가에도 적용된다.

person.age = 20;
console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// { value: 20, writable: true, enumerable: true, configurable: true }