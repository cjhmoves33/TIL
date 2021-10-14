// Object.preventExtensions 메서드는 객체의 확장의 금지한다. 이는 프로퍼티 추가 금지를 의미한다.
// 프로퍼티는 프로퍼티 동적추가와 Object.defineProperty 메서드로 추가할 수 있다. 이 두가지 모두 금지된다.
// 확장이 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인할 수 있다.

const person = {
  myName: 'Lee Book',
};

console.log(Object.isExtensible(person));
// true, 확장금지된 객체가 아니다.

Object.preventExtensions(person);
console.log(Object.isExtensible(person));
// false, Object.preventExtensions 메서드로 확장을 금지시켰다.

person.age = 25;
// 프로퍼티 추가가 금지된다.(무시), strict mode에서는 에러
console.log(person);
//  { myName: 'Lee Book' }

delete person.myName;
console.log(person);
// {}, 삭제는 가능하다.

Object.defineProperty(person, 'gender', {
  value: 'male',
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(person);
// TypeError: Cannot define property gender, object is not extensible
// 프로퍼티 정의 메서드로 프로퍼티 추가도 금지 된다.