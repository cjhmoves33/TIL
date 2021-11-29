// ? pages에서 공통적으로 처리해야할것들을 _app.js에 적용시켜준다.(이곳에서 렌더링 하는 값은 무조건 모든 페이지에 영향을 준다.)
// ? 클라이언트에서 띄우길 바라는 전체 컴포넌트 -> 공통 레이아웃임으로 최초 실행되며 내부에 컴포넌트들을 실행함.
import 'antd/dist/antd.css'

// * 내부에 컴포넌트가 있다면 전부 실행하고 html의 body로 구성됨.
// * props로 받은 Component는 요청한 페이지다. GET / 요청을 보냈다면, Component에는 /pages/index.js 파일이 props로 내려오게됨.
// * pageProps는 페이지 getInitialProps를 통해 내려받은 props들을 말한다. 
// 그 다음으로 _document.js가 실행됨. _app.js에서 console.log 실행 시 client, server둘다 콘솔찍음.
const MyApp = ({ Component, pageProps }) => {

}