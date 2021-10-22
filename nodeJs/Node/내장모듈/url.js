// !! 내장모듈은 Node.js 공식문서에 API DOCS를 읽어보면 정확한 정보를 알 수 있다.

const { URL } = require('url');

const myUrl = new URL('https://www.google.com/search?q=java&rlz=1C5CHFA_enKR959KR959&oq=java&aqs=chrome..69i57j69i59l3j0i433i512j69i60j69i61j69i60.2351j0j1&sourceid=chrome&ie=UTF-8');

// ? searchParams 쿼리 부분 처리를 도와주는 객체(문자열을 객체 형태로 바꿔준다.)
console.log('searchParams: ', myUrl.searchParams);
console.log('searchParams.getAll(): ', myUrl.searchParams.getAll('rlz')); // 해당쿼리의 모든 값을 배열로 반환한다.
console.log('searchParams.get(): ', myUrl.searchParams.get('aqs'));
console.log('searchParams.has(): ', myUrl.searchParams.has('q'));

console.log('searchParams.keys(): ', myUrl.searchParams.keys()) // iterator객체를 반환
console.log('searchParams.values(): ', myUrl.searchParams.values()) // iterator객체를 반환
