import PropTypes from 'prop-types'

import { Form, Input, Button, Checkbox } from 'antd'
import { useState, useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// styled components를 사용해야하는 이유중 하나는 리렌더링 문제에 있다.
// 이벤트 함수를 useCallback으로 감싸주는 이유와 비슷하게 이 컴포넌트가 렌더링될 때 마다 컴포넌트에 inline으로 쓰여진 style속성을 새로운객체로 인식하고
// 그 컴 포넌트를 다시 렌더링해버린다.
// styled component를 사용하지 않고도 리렌더링을 방지할 수 있는데,
// useMemo를 사용해서 (스타일)객체를 감싸고 그 식별자(변수)를 inline style 속성에 입력하면 된다.

const LoginButton = styled(Button)`
  margin-right: .5rem;
  margin-bottom: .5rem;
`;

const LoginFormWrapper = styled(Form)`
  padding: 1rem;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  
  
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback( e => setId(e.target.value), [] );
  const onChangePassword = useCallback( e => setPassword(e.target.value), [] );

  const onSubmitForm = useCallback( () => {
    // antd의 From 컴포넌트의 onFinish는 e.preventDefault가 적용되어있기 때문에 설정하면 안된다.
    console.log(id, password);
    setIsLoggedIn(true);
  },[id, password] );

  const inputRules = useCallback( (value) =>[
    {
      required: true,
      message: `please input ${value}`
    }
  ], [])

  return (
    <LoginFormWrapper onFinish={onSubmitForm}  >
      <Form.Item name='username' rules={inputRules('username')}>
        <Input 
        value={id} 
        onChange={onChangeId} 
        placeholder='ID'
        />
      </Form.Item>
      <Form.Item rules={inputRules('password')}>
        <Input 
        type='password' 
        value={password} 
        onChange={onChangePassword} 
        placeholder='PASSWORD'
        />
      </Form.Item>
      <Form.Item noStyle>
        <Checkbox>Remember id/pw</Checkbox>
        <Link href='/forgot'><a>forgot id/password</a></Link>
      </Form.Item>
      <Form.Item >
        <LoginButton type='primary' htmlType='submit'>Log In</LoginButton>
        <Link href='/signup'><a><Button>Sign Up</Button></a></Link>
      </Form.Item>
    </LoginFormWrapper>
  )
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired
}

export default LoginForm;