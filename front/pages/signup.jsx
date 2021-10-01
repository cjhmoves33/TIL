/* eslint-disable react/react-in-jsx-scope */
// 서버가 작동 중일 때 컴포넌트를 새로 만든경우 '가끔' 서버가 인식하지 못하기도 한다. 그럴 땐 그냥 껏다가 키면 됨.
// http://localhost:3000/signup
// next.js가 컴포넌트와 url을 1대1 매핑을 해줌.
// next.js는 프론트서버를 가지고 있기 때문에 라우팅, SSR을 자동으로 해준다.

import { useState, useCallback, useMemo } from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';

import useInput from '../hooks/useInput';
import inputRules from '../hooks/inputRules';

const ErrorMessage = styled.div`
  color: red;
`;


const SignUp = () => {
  const [ id, setId ] = useInput('');
  const [ nickname, setNickname ] = useInput('');
  const [ password, setPassword ] = useInput('');
  const [ passwordCheck, setPasswordCheck ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);

  const onChangePasswordCheck = useCallback( (e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);


  const onSignUp = useCallback( () => {
  }, []); 

  const formInitialValue = useMemo( () => ({
    remember: true,
  }), [])


  return (
    <>
      <Head>
        <title>sign up || node bird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSignUp} initialValues={formInitialValue}>

          <Form.Item name='nickname' rules={inputRules()} >
            <Input value={nickname} onChange={setNickname} placeholder='닉네임' ></Input>
          </Form.Item>

          <Form.Item name='username' rules={inputRules()} >
            <Input value={id} onChange={setId} placeholder='아이디'></Input>
          </Form.Item>

          <Form.Item name='password' rules={inputRules()} >
            <Input value={password} onChange={setPassword} placeholder='패스워드'></Input>
          </Form.Item>

          <Form.Item name='passwordCheck' rules={inputRules()} >
            <Input value={passwordCheck} onChange={onChangePasswordCheck} placeholder='패스워드 확인'></Input>
            {passwordError ?? <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </Form.Item>

        </Form>
      </AppLayout>
    </>
  );
}

export default SignUp;