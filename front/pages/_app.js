// 모든 페이지에서 공통으로 보여지는 부분을 _app.js에 입력하면 되고
// 특정 컴포넌트끼리 공통인 것들(특정기능으로 묶이는 컴포넌트들 예를들면 하나의 메뉴바에 모이게 될 컴포넌트들)은 layout으로 만들어서 묶어주면 된다.
// _app.js는 pages 들의 공통 부분

import PropTypes from 'prop-types';
import Head from 'next/head'
// doc의 <head></head>를 수정할 수 있게 next에서 <Head>컴포넌트를 지원한다.
// 필요에 따라 각각의 컴포넌트에서 head를 수정할 수 도있다.
import 'antd/dist/antd.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
      </Head>
      <Component />
    </>
  )
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default App;
// 컴포넌트의 이름은 아무 이름이나 상관없다.