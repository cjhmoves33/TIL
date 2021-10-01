/* eslint-disable react/react-in-jsx-scope */
// 서버가 작동 중일 때 컴포넌트를 새로 만든경우 '가끔' 서버가 인식하지 못하기도 한다. 그럴 땐 그냥 껏다가 키면 됨.
// http://localhost:3000/signup
// next.js가 컴포넌트와 url을 1대1 매핑을 해줌.
// next.js는 프론트서버를 가지고 있기 때문에 라우팅, SSR을 자동으로 해준다.

import { useCallback, useMemo } from 'react';
import { Form, Input } from 'antd';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const SignUp = () => {
  const onSignUp = useCallback( () => {

  }, []); 

  const formInitialValue = useMemo( () => ({
    remember: true,
  }), [])

  const signUpRules = useCallback( (value) => ({
    require: true,
    message: `${value}를 입력하세요.`
  }), [])

  return (
    <>
      <Head>
        <title>sign up || node bird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSignUp} initialValues={formInitialValue}>
          <Form.Item name='username' rules={signUpRules('아이디')} >
            <Input></Input>
          </Form.Item>
          <Form.Item name='password' rules={signUpRules('패스워드')} >
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
}

export default SignUp;