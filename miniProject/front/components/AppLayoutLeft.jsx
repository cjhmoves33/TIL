import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

// design tool
import { UserOutlined, QqOutlined } from '@ant-design/icons'

const LeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  text-align: end;
  padding: 1rem 2rem;
  border-right: #ebebeb solid 1px;
  /* background-color: hotpink; */
`
const iconStyle = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
  color: 'gray'
};
const AppLayoutLeft = () => {
  return (
  <LeftSideBar>
    <Link href='/'>
      <a><QqOutlined style={iconStyle}/></a>
    </Link>
    <Link href='/profile'>
      <a><UserOutlined style={iconStyle}/></a>
    </Link>
  </LeftSideBar>
  )
}

export default AppLayoutLeft;