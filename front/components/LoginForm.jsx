import { Form, Input, Button, Checkbox } from 'antd'
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link';

import styled from 'styled-components';

import useInput from '../hooks/useInput';


// styled components를 사용해야하는 이유중 하나는 리렌더링 문제에 있다.
// 이벤트 함수를 useCallback으로 감싸주는 이유와 비슷하게 이 컴포넌트가 렌더링될 때 마다 컴포넌트에 inline으로 쓰여진 style속성을 새로운객체로 인식하고
// 그 컴 포넌트를 다시 렌더링해버린다.
// styled component를 사용하지 않고도 리렌더링을 방지할 수 있는데,
// useMemo를 사용해서 (스타일)객체를 감싸고 그 식별자(변수)를 inline style 속성에 입력하면 된다.

const LoginFormButton = styled(Button)`
  width: 100%;
  margin-top: .5rem;

`;

const LoginFormWrapper = styled(Form)`
  padding: 1rem;
`;


const LoginForm = ({ setIsLoggedIn, setUserId }) => {
  // useInput은 커스텀 훅
  
  const [ remember, setRemember ] = useState(true);
  const onChangeRememberBox = useCallback( e => {
    setRemember(e.target.checked);
  }, [])

  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');

  const onSubmitForm = useCallback( () => {
    // antd의 From 컴포넌트의 onFinish는 e.preventDefault가 적용되어있기 때문에 설정하면 안된다.
    setIsLoggedIn(true);
    setUserId(id);
  },[id, password] );

  return (
    <LoginFormWrapper onFinish={onSubmitForm}  >

      <Form.Item >
        <Input value={id} onChange={setId} placeholder='ID' required/>
      </Form.Item>

      <Form.Item >
        <Input type='password' value={password} onChange={setPassword} placeholder='PASSWORD' required/>
      </Form.Item>

      <Form.Item noStyle>
        <Checkbox checked={remember} onChange={onChangeRememberBox} >Remember id</Checkbox>
        <br/>
        <Link href='/forgot'><a>forgot id/password</a></Link>
      </Form.Item>

      <Form.Item >
        <LoginFormButton type='primary' htmlType='submit'>Log In</LoginFormButton>
        <Link href='/signup'><a><LoginFormButton>Sign Up</LoginFormButton></a></Link>
        {/* Link 컴포넌트는 next.js href은 Link에 주고 a에는 안주는게 좋다. */}
      </Form.Item>

    </LoginFormWrapper>
  )
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired
}

export default LoginForm;