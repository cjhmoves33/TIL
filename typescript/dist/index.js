// * 함수에 인자를 전부 할당하지 않을 경우
const user = 'bok', age = 26;
const greeter = (user, age) => {
    console.log(`hi ${user}, you are ${age}!`);
};
greeter(user, age);
// greeter(user);
// 위와 같이 함수 greeter에 인자를 하나만 줬을 경우. // ! index.ts:8:1 - error TS2554: Expected 2 arguments, but got 1.
// 이런 에러를 발생시킨다. 자바크스립트의 경우 함수에 인자를 넣지 않으면 자동으로 undefined를 할당하지만 타입스크립트에서는 기본적으로 오류를 발생시킨다.
const greeterWithOptionalParameter = (user, age) => {
    // age에 ?를 붙여주면 optional parameter가 된다.
    console.log(`hi ${user}, you are ${age}`);
};
// 파라미터를 안받아도 된다는 별도의 설정이 필요하다.
// * 인자에 타입 지정해주기
const typeGreeter = (user, age) => {
    console.log(`hi ${user}, you are ${age}!!!`);
};
// typeGreeter("buk", "1") -> 두번째 인자로 string타입이 들어올 수 없다는 오류문구를 보여준다.
// * return 타입 지정
const returnVoidGreeter = (user, age) => {
    console.log(`hi ${user}, you are ${age}`);
    // return type void는 아무것도 리턴하지 않는다는 의미로 쓰인다. 만약여기에서
    // return `hi ${user}, you are ${age}` string타입을 리턴하려고 한다면 오류를 낸다.
};
const returnStringGreeter = (user, age) => {
    return `hi ${user}, you are ${age}`;
    //string타입을 리턴 하기 때문에 오류를 내지않고, 만약 다른 타입을 리턴하거나 리턴이 없을 시 또다시 오류룰 낸다.
};
returnStringGreeter('bokk', 22);
// 함수호출에 마우스를 올려보면 const returnStringGreeter: (user: string, age: number) => string 이런 정보를 얻을 수 있다.
//# sourceMappingURL=index.js.map