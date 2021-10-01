// pages와는 다르게 components 디렉토리는 이름을 지킬필요는 없다.
// npm i prop-types

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// next는 자체적인 router가 있다.
import Link from 'next/link';

import { Menu, Input, Row, Col } from 'antd';
// css 프레임워크들은 그리드시스템(반응형, 적응형)을 지원한다. { Row, Col } from 'antd';
// 반응형으로 만들 때 모바일 -> 테블릿 -> 데스크탑 순서로 개발하는 것을 강력히 추천.. 반대로 하면 혼쭐남.
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const AppLayout = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>
      <Menu mode='horizontal'>
        <Menu.Item key='1'>
          <Link href='/'><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link href='/profile'><a>profile</a></Link>
        </Menu.Item >
        <Menu.Item key='3'>
          <Input.Search placeholder="search here" allowClear enterButton style={{ width: '20rem', verticalAlign: 'middle'}}/>
        </Menu.Item>
        <Menu.Item key='4'>
          <Link href='/signup'><a>sign up</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* gutter는 col간의 gap */}
        <Col xs={24} sm={8} md={6}>{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}  /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}</Col>
        <Col xs={24} sm={12} md={12}>{children}</Col>
        <Col xs={24} sm={6} md={6}>
          <a href='http://www.naver.com' target='_blank' rel='noreferrer noopener'>NAVER</a>
        </Col>
      </Row>
      
    </>
  )
}

AppLayout.propTypes = {
  // children은 (리액트에서의)node type (DOM에서의 노드를 생각하면 편함)
  // 사실 props.children은 노드를 가져오는 것이기 때문
  children: PropTypes.node.isRequired,
}

export default AppLayout;