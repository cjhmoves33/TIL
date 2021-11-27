
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  // * props.children은 AppLayout컴포넌트가 사용될 때
  // * <AppLayout>
  // 여기에 들어오는 모든 것들이 prop.children으로 들어온다.
  // 단순히 문자열이 들어올수도 있지만 HTML태그가 들어올 수도 있고
  // 다른 컴포넌트가 들어오는 등 다양하다.
  // * </AppLayout>
  return (
    <React.Fragment>
      <Link href='/'><a>노드버드  </a></Link>
      <Link href='/profile'><a>프로필  </a></Link>
      <Link href='/signup'><a>회원가입</a></Link>
      {children}
    </React.Fragment>
  )
}

AppLayout.defaultProps = <div>엥?</div>
// * 만약 props가 주어지지 않는다면 defaultProps를 설정해줄 수 있다.

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
  // * props.children은 type이 node.
}

export default AppLayout;