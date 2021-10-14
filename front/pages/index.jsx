// import React from 'react';
// next.js는 import React from 'react';를 입력하지 않아도 된다. (입력해도 상관없음)

// next에서 'pages'폴더는 반드시 이름을 'pages'로 해줘야한다. 그럼 next.js가 'pages'폴더안의 파일들을
// 전부 개별 페이지 컴포넌트(코드 스플리팅이 된)로 알아서 만들어준다.

// 서버를 작동하면 http://localhost:3000/ ('/'는 생략가능.) 이 페이지가 자동으로 index.js(jsx)를 인식해서 빌드한 페이지.

// eslint를 적용하고나면 import React를 안한거에 대해 빨간줄이 생기는데 .eslint의 rules 설정에서 해결가능.
// "react/react-in-jsx-scope": "off" 입력

import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>node bird</title>
      </Head>
      <AppLayout>
        <div>Hello, Next v11 </div>
      </AppLayout>
    </>
  )
}

export default Home;