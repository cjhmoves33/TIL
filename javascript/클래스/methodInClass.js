// constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다. constructor는 이름을 변경할 수 없다.
// 클래스는 평가되어 함수 객체가 된다. 함수 객체 고유의 프로퍼티를 모두 가지고 있다. 함수와 동일하게 프로토타입과 연결되어 있으며 자신의 스코프체인을 구성한다.
// 모든 함수 객체가 가지고 있는 prototype프로퍼티가 가리키는 포로토타입 객체의 constructor 프로퍼티는 클래스 자신을 가리키고 있다.
// 이는 클래스가 인스턴스를 생성하는 생성자 함수라는 것을 의미한다.

// 그런데 클래스가 평가되어 생성된 함수 객체나 인스턴스 어디에도 constructor 메서드가 보이지않는다.(prototype의 constructor프로퍼티가 아님).
// 이는 클래스 몸체에 정의한 constructor가 단순한 메서드가 아니라는 것을 의미한다.
// constructor는 메서드로 해석되는 것이 아니라 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다.
// 클래스 정의가 평가되면 constructor의 기술된 동작을 하는 함수 객체가 생성된다.

// 클래스 내부에 constructor를 생략하면 암묵적으로 빈 constructor가 정의되고 클래스는 빈 객체를 생성한다.


// 정적 메서드
// this를 사용하지 않는 메서드는 정적 메서드로 정의하는 것이 좋다.
// this를 사용하지않을거면 클래스 내부에 메서드로 있을 필요가 있는가에 대해 생각이든다.
// 정적 메서드를 사용하게되면 애플리케이션 전역에서 사용할 유틸리티 함수를 전역 함수로 정의하지않고 메서드로 구조화할 때 유용하다.
// 클래스 또는 생성자 함수를 하나의 네임스페이스로 사용하는 것이다.
// 그렇게하면 이름 충돌도 막아주고 관련된 함수로서 구조화할 수 있다는 것이다.


// 정적 메서드의 구조화 예시
Math.max(1,2,3); // 3
Number.isNaN(NaN); // true
JSON.stringify({ a: 1 }); // "{"a":1}"
Object.is({}, {}); // false
Reflect.has({ a: 1 }, 'a'); // true


// 클래스에서 정의한 메서드 특징
// 1. 축약표현 사용
// 2. 콤마가 필요없다.(결국 함수라는 것을 생각해보면 쉽다.)
// 3. 암묵적으로 strict mode
// 4. 프로퍼티 어트리뷰트가 [[Enumerable]]이 false이다. for..in 이나 Object.keys()등으로 열거할 수 없다.
// 5. 내부 메서드 [[Constructor]]를 갖지않는 non-constructor다.([[Call]]만 존재.)