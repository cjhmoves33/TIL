const hi = () => console.log('hi');
// ? arrow function은 ES6문법이다. 대부분 브라우저가 ES6를 지원하지만 그렇지않다면 ES5로 트랜스파일링 해줘야 할 것이다.
// ? babel을 통해 최신문법(또는 실험적 문법 등)을 모든 브라우저가 알아들을 수 있는 문법으로 바꿔준다.

// babel만으로는 무언가를 할 수 없다. 바벨의 동작은 plugin이다.
// 바벨이 의존성을 사용할 수 있게 .babelrc에 설정을 작성한다.

// ES6를 추가적으로 더 사용하고싶다면 전부 플러그인을 설치하고 .babelrc에 등록해줘야한다.
// 다양한 플러그인들을 모아놓은 preset을 사용할 수 있다. preset은 공식/비공식이 존재.(개인적으로 만들어 사용할 수 있다는 뜻)
// * 공식 preset
// @babel/preset-env
// @babel/preset-flow
// @babel/preset-react
// @babel/preset-typescript

// 지금은 @babel/preset-env을 사용해봄.(ES6문법을 트랜스파일링하는 플러그인들이 있고 browser list도 포함.)
