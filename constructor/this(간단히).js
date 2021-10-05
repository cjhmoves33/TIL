// this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing-variable)다.
// this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

//        함수 호출 방식            this가 가리키는 값(this 바인딩)
//    일반 함수로서 호출             전역 객체
//    메서드로서  호출              메서드를 호출한 객체(마침표 앞의 객체) 
//    생성자 함수로서 호출           생성자 함수가 (미래에) 생성할 인스턴스 

// 생성자 함수로 인스턴스를 만들었다고 가정하고 괸계도를 간략히 나타내자면
// 객체(인스턴스) <- this -> {생성자 함수가 만든 익명의 객체}

// 생성자 함수는 일반 함수와 다를게없다.
// 단지 new 연산자와 함께 호출하면 생성자함수로 동작하고([[Constructor]]내부 메서드 호출, 단 그 함수가 constructor일 때만)
// new 연산자없이 호출하면 일반 함수처럼 동작한다([[Call]내부 메서드 호출])

function foo() {
  console.log(this);
}

foo(); // 일반 함수로서 호출, this는 전역객체(브라우저에서는 window, Node.js에서는 global)을 가리킨다.

const obj = {
  foo,
};

obj.foo(); // { foo: [Function: foo] }, 메서드로서 호출했기 때문에 this는 메서드를 호출한 객체를 가리킨다.

const inst = new foo(); //foo {}, 생성자 함수로서 호출했기 때문에 this는 생성자 함수가 생성한 객체에 바인딩된다.
console.log(inst) // foo {}