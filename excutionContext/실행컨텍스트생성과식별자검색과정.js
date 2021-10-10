var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z =5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}

foo(20);

// ? 전역 객체 생성
// 전역 객체는 전역 코드가 평가되기 이전에 생성된다. 이때 전역 객체에는 빌트인 전역 프로퍼티와 빌트인 전역 함수, 그리고 표준 빌트인 객체가 추가되며 동작 환경(클라이언트 사이드 또는 서버사이드)에 따라
// 클라이언트 사이드 Web API(DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web Worker 등) 또는
// 특정 환경을 위한 호스트 객체를 포함한다. 전역 객체도 Object.prototype을 상속받는다. 즉, 전역 객체도 프로토 타입 체인의 일원이다.

// ? 전역 코드 평가
// 소스코드가 로드되면 자바스크립트 엔진은 다음과 같은 순서로 전역 코드를 평가를 진행한다.
// 1. 전역 실행 컨텍스트 생성
// 2. 전역 렉시컬 환경 생성
//  2-1. 전역 환경레코드 생성
//   2-1-1. 객체 환경 레코드 생성
//   2-1-2. 선언적 환경 레코드 생성
//  2-2. this 바인딩
//  2-3. 외부 렉시컬 환경에 대한 참조 결정


// * 1. 전역 실행 컨텍스트 생성
// 먼저 비어 있는 전역 실행 컨텍스트를 생성하여 실행 컨텍스트 스택에 푸시한다. 이때 전역 실행 컨텍스트는 실행 컨텍스트 스택의 최상위, 즉 실행 중인 컨텍스트가 된다.

// * 2. 전역 렉시컬 환경 생성
// 전역 렉시컬 환경(Global Lexical Environment)을 생성하고 전역 실행 컨텍스트에 바인딩한다.
// *  2-1. 전역 환경 레코드 생성
// 전역 렉시컬 환경을 구성하는 컴포넌트인 전역 환경 레코드(Global Environment Record)는 전역 변수를 관리하는 전역 스코프, 전역 객체의 빌트인 전역 함수, 표준 빌트인 객체를 제공한다.
// 모든 전역 변수가 전역 객체의 프로퍼티가 되는 ES6 이전에는 전역 객체가 전역 환경 레코드의 역할을 수행했다. 하지만 ES6의 let, const 키워드로 선언한 전역변수는 전역 객체의 프로퍼티가 되지 않고 개념적인 블록 내에 존재하게 된다.
// var 키워드, let, const 키워드로 선언한 전역 변수를 구분하여 관리하기 위해 전역 스코프 역할을 하는 전역 환경 레코드는
// ? 객체 환경 레코드(Object Environment Record)와 선언적 환경 레코드(Declarative Environment Record)로 구성되어 있다.
// 객체 환경 레코드는 기존의 전역 객체가 관리하던 var 키워드로 선언한 전역 변수와 함수 선언문으로 정의한 전역 함수, 빌트인 전역 프로퍼티와 빌트인 전역 함수, 표준 빌트인 객체를 관리하고,
// 선언적 환경레코드는 let, const 키워드로 선언한 전역 변수를 관리한다. 즉, 전역 환경 레코드의 객체 환경 레코드와 선언적 환경 레코드는 서로 협력하여 전역 스코프와 전역 객체(전역 변수의 전역 객체 프로퍼티화)를 관리한다.
// *  2-1-1. 객체 환경 레코드 생성
// 전역 환경 레코드를 구성하는 컴포넌트인 객체 환경 레코드는 BindingObject라고 부르는 객체(전역코드 평가이전에 생성된)와 연결된다.
// ? 전역 코드 평가 과정에서 var 키워드로 선언한 전역 변수와 함수 선언문으로 정의된 전역 함수는 전역 환경 레코드의 객체 환경 레코드에 연결된 BindingObjectㅇ를 통해 전역 객체의 프로퍼티와 메서드가 된다.
// 그리고 이때 등록된 식별자를 전역 환경 레코드의 객체 환경 레코드에서 검색하면 전역 객체의 프로퍼티를 검색하여 반환한다.
// 이것이 var 키워드로 선언된 변수와 함수 선언문으로 정의된 전역 함수가 전역 객체의 프로퍼티와 메서드가 되고 전역 객체를 가리키는 식별자(예를 들어 브라우저에서는 window) 없이 전역 객체의 프로퍼티를 참조 할 수 있는 메커니즘이다.
// 맨위 예제의 x 변수는 var 키워드로 선언한 변수다. 따라서 선언단계와 초기화단계가 동시에 진행된다. 다시말해 전역 코드 평가 시점에 객체 환경 레코드에 바인딩된 BindingObject를 통해
// 전역 객체에 변수 식별자를 키로 등록한 다음, 암묵적으로 undefined를 바인딩한다.
// ? 이것이 호이스팅이 발생하는 원인이다.
// 함수 선언문으로 정의한 함수가 평가되면 함수 이름과 동일한 이름의 식별자를 객체 환경 레코드에 바인딩된 BindingObject를 통해 전역 객체에 키로 등록하고 생성된 함수 객체를 즉시 할당한다.
// 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있는 이유다.(변수 호이스팅과 함수 호이스팅의 명확한 차이점.)
// *  2-1-2. 선언적 환경 레코드 생성
// let, const 키워드로 선언한 전역 변수(let, const 변수에 할당한 함수 표현식 포함)는 선언적 환경 레코드에 등록되고 관리된다.
// ES6의 let, const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 되지않고 개념적 블록 내에 존재하게 되는데, 이 개념적 블록이 전역 환경 레코드의 선언적 환경 레코드다.
// 따라서 위 예제의 전역 변수 y는 전역 객체의 프로퍼티가 되지않는다. 또한 let, const 키워드로 선언한 변수는 선언단계와 초기화 단계가 분리되어 진행한다.
// 즉 런타임에 실행 흐름이 변수 선언문에 도달하기 전까지 일시적 사각지대(TDZ)에 빠지게 된다.
// *  2-2. this 바인딩
// 전역 환경 레코드의 [[GlobalThisValue]] 내부 슬롯에 this가 바인딩 된다. 일반적으로 전역 코드에서 this는 전역 객체를 가리키므로 전역 환경 레코드의 [[GlobalThisValue]] 내부슬롯에 전역 객체가 바인딩된다.
// 전역 코드에서 this를 참조하면 전역 환경 레코드의 [[GlobalThisValue]] 내부 슬롯에 바인딩되어 있는 객체가 반환된다.
// *  2-3. 외부 렉시컬 환경에 대한 참조 결정
// 외부 렉시컬 환경에대한 참조(Outer Lexical Environment Reference)는 현재 평가 중인 소스코드를 포함하는 외부소스코드의 렉시컬 환경, 즉 상위 스코프를 가리킨다.
// 이를 통해 단방향 링크드 리스트인 스코프 체인을 구현한다.
// 전역 코드를 포함하는 소스코드는 없으므로 전역 렉시컬 환겨의 외부 렉시컬 환경에 대한 참조에 null이 할당된다. 이는 전역 렉시컬 환경이 스코프 체인의 종점임을 의미한다.