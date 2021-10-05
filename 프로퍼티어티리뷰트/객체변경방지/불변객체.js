// 변경방지 메서드들은 얕은 변경 방지이다.

const person = {
  myName: 'lee bok',
  address: {
    country: 'kr',
    city: 'busan',
  }
};

Object.freeze(person);
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.myName)); // true
console.log(Object.isFrozen(person.address)); // false

console.log(Object.getOwnPropertyDescriptors(person));
// {
//   myName: { value: 'lee bok', writable: false, enumerable: true, configurable: false },
//   address: { value: { country: 'kr', city: 'busan' }, writable: false, enumerable: true, configurable: false }
// }
// address의 프로퍼티 디스크립터 객체에는 writable, configurable이 false임을 볼 수 있다.
// address를 변경하거나 삭제할 수 없지만 address안의 객체는 변경, 삭제가 가능하다.

console.log(Object.getOwnPropertyDescriptors(person.address));
// {
//   country: { value: 'kr', writable: true, enumerable: true, configurable: true },
//   city: { value: 'busan', writable: true, enumerable: true, configurable: true }
// }

// 객체의 중첩객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야한다.

function deepFreeze(target) {
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach( key => deepFreeze(target[key]) );
  }
}

const bokVung = {
  userCODE: 'bok vung',
  address: {
    country: 'kr',
    city: 'busan jin-gu',
  }
}

deepFreeze(bokVung);
console.log(Object.isFrozen(bokVung)); // true
console.log(Object.isFrozen(bokVung.address)); //true