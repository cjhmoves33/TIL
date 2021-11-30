// ? pages에서 공통적으로 처리해야할것들을 _app.js에 적용시켜준다.(이곳에서 렌더링 하는 값은 무조건 모든 페이지에 영향을 준다.)
// ? 클라이언트에서 띄우길 바라는 전체 컴포넌트 -> 공통 레이아웃임으로 최초 실행되며 내부에 컴포넌트들을 실행함.
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import { Row, Col } from 'antd';
import AppLayoutLeft from '../components/AppLayoutLeft';
import AppLayoutTop from '../components/AppLayoutTop';

// * 내부에 컴포넌트가 있다면 전부 실행하고 html의 body로 구성됨.
// * props로 받은 Component는 요청한 페이지다. GET / 요청을 보냈다면, Component에는 /pages/index.js 파일이 props로 내려오게됨.
// * pageProps는 페이지 getInitialProps를 통해 내려받은 props들을 말한다. 
// 그 다음으로 _document.js가 실행됨. _app.js에서 console.log 실행 시 client, server둘다 콘솔찍음.
const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8'/>
        <title>NodeBird</title>
      </Head>
      <Row>
      <Col md={3}>
        <AppLayoutLeft/>
      </Col>
      <Col md={21}>
        <AppLayoutTop>
          <Component/>
        </AppLayoutTop>
      </Col>
    </Row>  
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired
  // proptypes중에 element와 elementType이 있는데 상위 컴포넌ㅌ에서 props로 컴포넌트 형식 자체로 줬을경우 element 컴포넌트를 식별자로 준경우 elementType이다.
  // * 컴포넌트를 props로 받아 사용할때 {Component}이렇게 써야할경우 element(props.children도 이런 형식으로 사용된다.). <Component />이렇게 써야할경우 elementType.
}

export default MyApp;