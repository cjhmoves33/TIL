- 브라우저의 주소창에 입력한 URL은 서버가 제공되는 환경에 존재하는 파일의 위치를 나타낸다. 예를 들어 https://abc.com:443/ 사이트에 접속하게 되면 abc.con주소가 가리키는 서버의 기본 폴더를 뚯한다. CLI환경에서 폴더와 파일의 위치를 찾듯이, 슬래시를 이용한 서버의 폴더에 진입하거나 파일을 요청할 수 있다. 그러나 기본적인 보안의 일환으로 직접 접근이 가능하게 만들지는 않는다.

- URL(Uniform Resource Locator)은 scheme, hosts, url-path로 구분할 수 있다. 가장먼저 작성하는 scheme는 통신방식(프로토콜)을 결정한다. 일반적인 웹 브라우저는 http(s)를 사용한다. hosts는 웹 서버의 이름이나 도메인, IP를 사용하며 주소를 나타낸다. url-path는 웹 서버에서 지정한 루트 디렉토리부터 시작하여 웹 페이지, 이미지, 동영상 등이 위치한 경로와 파일명을 나타낸다.

- URI(Uniform Resource Identifier)는 일반적으로 URL의 기본요소인 scheme, hosts, url-path에 더해 query, bookmark를 포함합니다. query는 웹 서버에 보내는 추가적인 질문이다. http://www.google.com:80/search?q=JavaScript 를 브라우저의 검색창에 입력하면 구글에서 JavaScript를 검색한 결과가 나타난다.

- 브라우저의 검색창을 클릭하면 나타나는 주소가 URI이다. URI는 URL을 포함하는 상위개념이다. 따라서 'URL은 URL다' 는 맞는 말이지만 'URI는 URL이다'는 틀린말이다.

```
구분                            명칭                                설명
file://, http://, https://    scheme                           통신 프로토콜
127.0.0.1, abc.com            hosts         웹 페이지, 이미지, 동영상 등의 파일이 위치한 웹서버, 도메인 또는 IP
www, mail, blog               subdomain
:80, :443, :3000              port                      웹 서버에 접속하기 위한 통로
/search,                      url-path   웹 서버의 루트 디렉토리부터 웹페이지, 이미지, 동영상 등의 파일이 위치까지의 경로
/ Users/username/Desktop
?q=JavaScript&hl=ko           query                   웹 서버에 전달하는 추가 질문
```

- 추가적으로 URI에는 URN(Uniform Resource Name)이라는 것도있다. 쓰이지 않아 접할 기회가 없다.
