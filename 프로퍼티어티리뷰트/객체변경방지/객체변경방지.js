// 객체는 변경가능한 값이므로 재할당 없이 직접 변경할 수 있다. 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며,
// Object.defineProperty, Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의 할 수도 있다.

// 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다. 객체 변경 방지 메서드들은 객체의 변경을 금지하는 강도가 다르다.

//      구분                메서드               (프로퍼티 추가)   (프로퍼티 삭제)   (프로퍼티 값 읽기)    (프로퍼티 값 쓰기)    (프로퍼티 어트리뷰터 재정의)
// 객체 확장 금지   Object.preventExtensions          X             O               O                   O                   O
// 객체 밀봉       Object.seal                       X             X               O                   O                   X
// 객체 동결       Object.freeze                     X             X               O                   X                   X
