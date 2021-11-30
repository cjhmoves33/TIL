import React from 'react';
import Link from 'next/link';

// design tool
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons'

// styledComponent
import styled from 'styled-components';

const LeftSideBar = styled(Menu)`
  height: 100vh;
  text-align: center;
`

const AppLayoutLeft = () => {
  return (
  <LeftSideBar mode='vertical'>
    <Menu.Item icon={<AppstoreOutlined/>}>
      <Link href='/'><a></a></Link>
    </Menu.Item>
  </LeftSideBar>
  )
}

export default AppLayoutLeft;