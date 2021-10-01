// pages와는 다르게 components 디렉토리는 이름을 지킬필요는 없다.
// npm i prop-types

import React from 'react';
import PropTypes from 'prop-types';
// next는 자체적인 router가 있다.
import Link from 'next/link';

import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const AppLayout = ({ children }) => {
  return (
    <Menu mode='horizontal'>
      <Menu.Item eventKey='1'>
        <Link href='/'>노드버드</Link>
      </Menu.Item>
      <Menu.Item eventKey='2'>
        <Link href='/profile'>profile</Link>
      </Menu.Item>
      <Menu.Item eventKey='3'>
        <Link href='/signup'>sign up</Link>
      </Menu.Item>
      {children}
    </Menu>
  )
}

AppLayout.propTypes = {
  // children은 (리액트에서의)node type (DOM에서의 노드를 생각하면 편함)
  // 사실 props.children은 노드를 가져오는 것이기 때문
  children: PropTypes.node.isRequired,
}

export default AppLayout;