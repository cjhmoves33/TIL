// * 재귀 함수는 자기 자신을 호출하는 함수를 말한다.
// * 메모이제이션은 프로그래밍을 할 때 반복되는 결과를 메모리에 저장해서 다음에 같은 결과가 필요로할 때 저장된 값을 바로 가져와 결과를 빠르게 나오게 할 때 사용되는 코드 기법.
// * 클로저를 이용하면 메모이제이션 기법을 이용할 수 있다.
// ? 메모이제이션을 구현할 때 느낀 점은 클로저를 이용해서 값을 저장 한다는 것은 결국 그 클로저의 렉시컬 환경을 계속 유지하며 사용한다는 걸 뜻하는 것같다.
// ? 클로저는 함수와 함수가 선언된 렉시컬 환경의 조합이다.

const fibonacci = (num) => {
  if(num < 2) return num;
  else {
    return fibonacci(num - 1) - fibonacci(num - 2);
  }
}
// 여기 그다지 효율이 좋아보지이 않는 파보나치 수열 계산 함수가 있다. 함수가 한번 실행 될 때마다 재귀를 두번이나 한다.
// 재귀를 둘로 나눠서 한다고 반드시 연산량이 급증하는 것을 의미하지는 않는다. 그치만 이 경우에는 매우 비효율 적인것은 확실하다.
// 클로저를 이용해서 메모이제이션을 해보자.

const fibonacciMemo = () => {
  const memory = {};
  const rec = (num) => {
    if(num < 2) return num;
    else {
      const save1 = memory[num - 1] || rec(num - 1);
      const save2 = memory[num - 2] || rec(num - 2);
      const result = save1 + save2;
      memory[num] = result;
      console.log(save1, save2, result);
      return memory[num];
    }
  }
  return rec;
}
const niceFibonacci = fibonacciMemo();
niceFibonacci(43);
console.log('---------------------')
niceFibonacci(43);

// * 똑같은 값을 가지는 피보나치 함수를 두번 실행 했을 때 두번째 호출시에는 이미 가진 값을 memory에서 찾을 수 있기 때문에 추가적인 연산이 발생하지 않는다.
