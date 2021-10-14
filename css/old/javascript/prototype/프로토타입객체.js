// 프로토타입은 어떤 객체의 싱위객체 '역할'을 하는 객체로서 다른 객체에 공유 프로퍼티(메서드 포함)를 제공한다.
// 모든 객체는 [[prototype]] 내부 슬롯을 가지며, 이 내부 슬롯의 값은 '프로토타입의 참조'(null인경우 해당객체는 프로토타입이 없다.)이다. 

// [[prototype]]에 저장되는 프로토타입은 객체 생성방식에 의해 결정되는데, 
// 객체 리터럴로 생성된 객체의 프로토타입은 Object.prototype이고 생성자함수로 생성된 객체의 포로토타입은 생성자함수의 prototype에 바인딩되어 있는 객체다.

// 모든 객체는 하나의 프로토타입을 가진다. 모든 프로토타입은 생성자함수와 연결되어있다.

const player = function(nick, job) {
  this.nickName = nick;
  this.level = 1;
  this.job = job;
}

player.prototype.greeting = `hi,`

const hero = new player('sai-ta-ma', 'hero');
// 생성자함수로 만든 인스턴스
console.log(hero); // player { nickName: 'sai-ta-ma', level: 1, job: 'hero' }
console.log(hero.nickName); // sai-ta-mal

console.log(hero.greeting) // 'hi,' 왜인지 player.prototype.greeting에 this를 이용해서 값을 내려고하면 undefined가 나온다.
console.log(hero.hasOwnProperty('greeting')); // false hero객체의 프로토타입에 있는 프로퍼티임을 알 수 있다.

// 프로토타입 접근
console.log(player.prototype) //{ greeting: 'hi,' }
console.log(hero.__proto__) //{ greeting: 'hi,' }
// 생성자함수는 생성자함수.prototype이라는 이름으로 프로토타입객체를 가진다.
// 생성자함수로 만든 인스턴스객체는 생성자함수.prototype를 프로토타입으로 가진다.
// 내부슬롯은 접근이 안되지만 프로토타입객체는 예외로 접근이 가능하다. 그 방법이 위에 적어둔 두가지방법이다.

console.log(hero.__proto__.constructor); // [Function: player]
console.log(player.prototype.constructor) // [Function: player]
// [[prototype]]은 생성자함수를 가르키는 constructor프로퍼티를 가진다.