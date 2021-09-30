/* eslint-disable react/react-in-jsx-scope */
// 서버가 작동 중일 때 컴포넌트를 새로 만든경우 '가끔' 서버가 인식하지 못하기도 한다. 그럴 땐 그냥 껏다가 키면 됨.
// http://localhost:3000/signup
// next.js가 컴포넌트와 url을 1대1 매핑을 해줌.
// next.js는 프론트서버를 가지고 있기 때문에 라우팅, SSR을 자동으로 해준다.

// import React from 'react';
import AppLayout from '../components/AppLayout';

const SignUp = () => {
  return (
    <AppLayout>
      <div>Sign Up Page</div>
    </AppLayout>
  );
}

export default SignUp;