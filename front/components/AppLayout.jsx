// pages와는 다르게 components 디렉토리는 이름을 지킬필요는 없다.
// npm i prop-types

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// next는 자체적인 router가 있다.
import Link from 'next/link';

import { Menu, Input, Row, Col } from 'antd';
// css 프레임워크들은 그리드시스템(반응형, 적응형)을 지원한다. { Row, Col } from 'antd';
// 반응형으로 만들 때 모바일 -> 테블릿 -> 데스크탑 순서로 개발하는 것을 강력히 추천.. 반대로 하면 혼쭐남.
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({ children }) => {
  const [ userId, setUserId ] = useState('');
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>
      <Menu mode='horizontal'>
        <Menu.Item key='1'><Link href='/'><a>노드버드</a></Link></Menu.Item>

        <Menu.Item key='2'><Link href='/profile'><a>profile</a></Link></Menu.Item>

        <Menu.Item key='3'><SearchInput placeholder="search" allowClear enterButton /></Menu.Item>

        <Menu.Item key='4'><Link href='/signup'><a>sign up</a></Link></Menu.Item>
      </Menu>

      <Row gutter={8}>
        {/* gutter는 col간의 gap */}
        <Col xs={24} sm={8} md={8} lg={6}>{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} userId={userId} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />}</Col>
        <Col xs={24} sm={16} md={16} lg={12}>{children}</Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <a href='http://www.naver.com' target='_blank' rel='noreferrer noopener'>NAVER</a>
        </Col>
      </Row>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;