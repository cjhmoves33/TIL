// Object.freeze 메서드는 객체를 동결한다. 객체 동결이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미한다.
// 즉, 동결된 객체는 읽기만 가능하다.
// 동결된 객체인지 여부는 Object.isFrozen메서드로 확인할 수 있다.

const person = { myName: 'Lee Bok' };

// person 객체는 동결(freeze)된 객체가 아니다.
console.log(Object.isFrozen(person));
// false

// person 객체를 동결하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
Object.freeze(person);
console.log(Object.isFrozen(person));
// true

// 동결된 객체는 writable 과 configurable이 false다.
console.log('myName', Object.getOwnPropertyDescriptor(person, 'myName'));
// myName { value: 'Lee Bok', writable: false, enumerable: true, configurable: false }

// 프로퍼티 추가가 금지된다.
person.age = 20;
// 무시, strict mode에서는 에러

// 프로퍼티 삭제가 금지된다.
delete person.myName;
// 무시. strict mode에서는 에러

// 프로퍼티 값 갱신이 금지된다.
person.myName = 'bok vung';
// 무시. strict mode에서는 에러

console.log(person);
// { myName: 'Lee Bok' }

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'myName', {
  writable: true,
  configurable: true,
});
// TypeError: Cannot redefine property: myName