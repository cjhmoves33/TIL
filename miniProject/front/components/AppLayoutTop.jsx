import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// design tool
import { Menu, Input } from 'antd';

// components
import MainGrid from './MainGrid';

const AppLayoutTop = ({ children }) => {
  // * props.children은 AppLayoutTop컴포넌트가 사용될 때
  // * <AppLayoutTop>
  // 여기에 들어오는 모든 것들이 prop.children으로 들어온다.
  // 단순히 문자열이 들어올수도 있지만 HTML태그가 들어올 수도 있고
  // 다른 컴포넌트가 들어오는 등 다양하다.
  // * </AppLayoutTop>
  return (
    <>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search style={{ verticalAlign: 'middle' }}/>
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <MainGrid >
        {children}
        <div>오른쪽</div>
      </MainGrid>
    </>
  )
}

AppLayoutTop.defaultProps = <div>엥?</div>
// * 만약 props가 주어지지 않는다면 defaultProps를 설정해줄 수 있다.

AppLayoutTop.propTypes = {
  children: PropTypes.node.isRequired
  // * props.children은 type이 node.
}

export default AppLayoutTop;