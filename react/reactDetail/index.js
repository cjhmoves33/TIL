import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

// * ReactDOM.render란?
// 컴포넌트를 페이지에 런더링하는 역할. react-dom라이브러리를 통해 사용가능.

// * React.StrictMode란?
// 리액트 프로젝트에서 레거시 기능들을 사용하지 못하세 하는 기능. componentWillMount 등 나중에는 완전히 사라질 옛날 기능 사용시 경고를 출력.
