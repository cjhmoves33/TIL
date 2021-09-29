// 자바스크립트 엔진은 프로퍼티를 생성할 때 '프로퍼티의 상태'를 나타내는 '프로퍼티 어트리뷰트'를 기본값으로 자동 정의한다.

// '프로퍼티 생태'란 프로퍼티의 값(value), 값의 갱신 가능 여부(writable), 열거 가능 여부(enumerable), 재정의 가능여부(configurable).
// '프로퍼티 어트리뷰트'는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯 [[value]], [[writable]], [[enumerable]], [[configurable]]
// 프로퍼티 어트리뷰트는 내부 슬롯이라 직접 접근헐 수 없지만, Object.getOwnPropertyDescriptor 메서드를 사용하여 간접 접근이 가능하다.

const person = {
  name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'))
// 프로퍼티 어트리뷰트 정보를 제공하는 '프로퍼티 디스크립터 객체'를 반환한다.
// { value: 'Lee', writable: true, enumerable: true, configurable: true }

// 사용범. Object.getOwnPropertyDescriptor(객체의 참조, '프로퍼티 키를 문자열로 전달') 
// 만약 존재하지 않는 프로퍼티느 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined가 반환된다.
console.log(Object.getOwnPropertyDescriptor(person, 'age')) // undefined

// ES8에서 도입된 Object.getOwnPropertyDescriptors 메서드를 사용하면 모든 프로퍼티의 프로퍼티 어트리뷰트에대한 프로퍼티 디스크립터 객체를 반환한다.

person.age = 20;
// 프로퍼티 동적 생성

console.log(Object.getOwnPropertyDescriptors(person));
// {
// name: {value: 'Lee',writable: true,enumerable: true,configurable: true},
// age: { value: 20, writable: true, enumerable: true, configurable: true }
// }

// '객체의 프로퍼티를 키'로 가지고 '프로퍼티 어트리뷰트에 대한 프로퍼티 디스크립터 객체를 값'으로 가지는 하나의 객체가 반환된다.