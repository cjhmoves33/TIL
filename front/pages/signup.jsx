/* eslint-disable react/react-in-jsx-scope */
// 서버가 작동 중일 때 컴포넌트를 새로 만든경우 '가끔' 서버가 인식하지 못하기도 한다. 그럴 땐 그냥 껏다가 키면 됨.
// http://localhost:3000/signup
// next.js가 컴포넌트와 url을 1대1 매핑을 해줌.
// next.js는 프론트서버를 가지고 있기 때문에 라우팅, SSR을 자동으로 해준다.

import { useState, useCallback, useMemo } from 'react';
import { Form, Input, Checkbox, Button} from 'antd';
import Head from 'next/head';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';

import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red;
`;

const FormInput = styled(Input)`
  width: 50%;
`;


const SignUp = () => {
  const [ id, setId ] = useInput('');
  const [ nickname, setNickname ] = useInput('');
  const [ password, setPassword ] = useInput('');
  
  const [ passwordCheck, setPasswordCheck ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);
  const onChangePasswordCheck = useCallback( e => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  
  const [ term, setTerm ] = useState(false);
  const [ termError, setTermError ] = useState(false);
  const onChangeTerm = useCallback( e => {
    setTerm(e.target.checked);
  }, []);

  const onSignUp = useCallback( () => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term]);

  const style = useMemo( () => ({
    marginTop: '1rem',
    textAlign: 'center'
  }))

  return (
    <>
      <Head>
        <title>sign up || node bird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSignUp} layout='vertical' style={style}>
          <Form.Item >
            <FormInput 
            value={nickname}
            onChange={setNickname}
            placeholder='닉네임'
            required
            />
          </Form.Item>

          <Form.Item >
            <FormInput 
            value={id}
            onChange={setId}
            placeholder='아이디'
            required
            />
          </Form.Item>

          <Form.Item >
            <FormInput 
            type='password'
            value={password}
            onChange={setPassword}
            placeholder='패스워드'
            required
            />
          </Form.Item>

          <Form.Item >
            <FormInput 
            type='password'
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            placeholder='패스워드 확인'
            required
            />
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </Form.Item>

          <Form.Item >
            <Checkbox checked={term} onChange={onChangeTerm} >약관에 동의합니다.</Checkbox>
            {termError && <ErrorMessage>약관에 동의 해야합니다.</ErrorMessage> }
          </Form.Item>

          <Form.Item >
            <Button type='primary' htmlType='submit'>가입하기</Button>
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
}

export default SignUp;