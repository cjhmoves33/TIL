// Object.seal 메서드는 객체를 밀봉한다.
// 객체 밀봉이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지를 의미한다.
// 즉, 밀봉된 객체는 읽기와 쓰기만 가능하다.
// 밀봉된 객체인지 여부는 Object.isSeal 메서드로 확인할 수 있다.

const person = { myName: 'Lee buk' };

// person 객체는 밀봉(seal)된 객체가 아니다.
console.log(Object.isSealed(person));
// false

// person 객체를 밀봉하여 프로퍼티추가, 삭제, 재정의를 금지한다.
Object.seal(person);

// person 객체는 밀봉된 객체다.
console.log(Object.isSealed(person));
// true

// 밀봉된 객체는 configurable 이 false다.
console.log(Object.getOwnPropertyDescriptors(person));
// {
//    myName: { value: 'Lee buk', writable: true, enumerable: true, configurable: false }
// }

// 프로퍼티 추가가 금지된다.
person.age = 25;
// 무시. strict mode에서는 에러

// 프로퍼티 삭제가 금지된다.
delete person.myName;
// 무시. strict mode에서는 에러

console.log(person);
// { myName: 'Lee buk' }

// 프로퍼티 값 갱신은 가능하다.
person.myName = 'lee seungho'
console.log(person);
// { myName: 'lee seungho' }

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'myName', {
  configurable: true,
})
// TypeError: Cannot redefine property: myName