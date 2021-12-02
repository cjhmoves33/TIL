import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// design tool
// import { Input } from 'antd';

// components
import MainGrid from './MainGrid';

export const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  border-right: #ebebeb solid 1px;
`
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-bottom: #ebebeb solid 1px;
`

const AppLayoutCenter = ({ children }) => {
  // * props.children은 AppLayoutTop컴포넌트가 사용될 때
  // * <AppLayoutCenter>
  // 여기에 들어오는 모든 것들이 prop.children으로 들어온다.
  // 단순히 문자열이 들어올수도 있지만 HTML태그가 들어올 수도 있고
  // 다른 컴포넌트가 들어오는 등 다양하다.
  // * </AppLayoutCenter>
  return (
    <StyledCenter>
      <Header>
        <p>아무개의 타임라인</p>
      </Header>
      <MainGrid >
        {children}
      </MainGrid>
    </StyledCenter>
  )
}

AppLayoutCenter.defaultProps = <div>엥?</div>
// * 만약 props가 주어지지 않는다면 defaultProps를 설정해줄 수 있다.

AppLayoutCenter.propTypes = {
  children: PropTypes.node.isRequired
  // * props.children은 type이 node.
}

export default AppLayoutCenter;