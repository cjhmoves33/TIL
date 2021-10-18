https://developer.mozilla.org/ko/docs/Web/HTTP/Messages 참고

# HTTP

- HTTP는 html과 같은 문서를 전송하기 위한 응용(어플리케이션)계층 프로토콜이다. http는 웹 브라우저와 웹 서버의 소통을 위해 디자인되었다. 전통적인 클라이언트-서버 모델에서 클라이언트가 http messages양식에 맞춰 요청을 보내면, 서버도 http messages 양식에 맞춰 응답한다. http는 특정 상태를 유지하지 않는다는 특징이있다.
- HTTP의 특징: Stateless(무상태성)

## HTTP messages

- HTTP messages는 클라이언트와 서버 사이에 데이터가 교환되는 방식이다. 요청(Requests)과 응답(Response) 이 두가지 유형으로 나뉜다.
- HTTP messages는 몇 줄의 텍스트 정보로 구성된다. 개발자는 이런 메시지를 직접 작성할 필요가 거의 없다. 구성파일 ,API, 인터페이스에서 HTTP messages를 자동으로 완성한다.

```
요청과 응답은 다음과 같은 유사한 구조를 가진다.
1. start line: start line에는 요청이나 응답의 상태를 나타낸다. 항상 첫 번째 줄에 위치한다. 응답에서는 status line이라고 부른다.
2. HTTP headers: 요청을 지정하거나, 메시지에 포함된 본문을 설명하는 헤더의 집합입니다.
3. empty line: 헤더와 본문을 구분하는 빈 줄이 있습니다.
4. body: 요청과 관련된 데이터나 응답과 관련된 데이터 또는 문서를 포함한다. 요청과 응답의 유형에 따라 선택적으로 사용한다.

여기서 start line과 HTTP headers를 묶어 요청이나 응답의 헤드(head)라고 하고, payload는 body라고 부른다.
```

## 요청(Requests)

### start line

- HTTP 요청은 클라이언트가 서버에 보내는 메시지다. start line에는 3가지 요소가 있다.

1. 수행할 작업(GET, PUT, POST 등)이나 방식(HEAD or OPTIONS)을 설명하는 HTTP method를 나타낸다. 예를 들어 GET method는 리소스를 받아야하고, POST method는 데이터를 서버로 전송한다.

2. 요청 대상(일반적으로 URL이나 URI) 또는 프로토콜, 포트, 도메인의 절대 경로는 요청 컨텍스트에 작성된다. 이 요청은 HTTP method마다 다르다.

- origin 형식: ?와 쿼리스트링이 붙는 절대 경로. POST, GET, HEAD, OPTIONS 등의 method와 함께 사용한다.

```
POST / HTTP 1.1
GET /back.png HTTP 1.0
HEAD /test.html?q=javascript HTTP/ 1.1
OPTIONS /page.html HTTP/1.0
```

- absolute 형식: 완전한 URL 형식으로, 프록시에 연결하는 경우 대부분 GET method와 함께 사용합니다.

```
GET https://developer.mozilla.org/ko/docs/Learn/Forms HTTP/1.1
```

- authority 형식: 도메인 이름과 포트 번호로 이루어진 URL의 authority component이다. HTTP 터널을 구축하는 경우, CONNECT와 함께 사용할 수 있다.

```
CONNECT developer.mozilla.org:80 HTTP/1.1
```

- asterisk 형식: OPTIONS와 함께 별표(\*)하나로 서버 전체를 표현한다.

```
OPTIONS * HTTP/1.1
```

3. HTTP 버전에 따라 HTTP message의 구조가 달라진다. 따라서 start line에 HTTP 버전을 함께 입력해야한다.

### headers

- 요청의 Headers는 기본 구조를 따른다. 헤더 이름(대소문자 구분이 없느 문자열), 콜론(:), 값을 입력한다. 값은 헤더에 따라 다르고 다음과 같이 나눌 수 있다.

```
General headers: 요청 및 응답 메시지 모두에서 사용되지만 컨텐츠 자체에는 적용되지 않는 헤더. 가장 흔한 general headers는 Date, Cache-Control, Connection이다.

Request headers: Request headers는 HTTP 요청에서 사용되지만 컨텐츠와는 관련없는 HTTP 헤더다. fetch를 통해 가져올 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더를 의미한다. Accept, Accept-*, If-*와 같은 요청 헤더들은 조건부 요청 수행을 허용한다.(요청을 구체화 하는것.) Cookie, User-Agent, Referer와 같은 것들은 컨텍스트를 정확히 나타내어 서버가 응답에 맞출 수 있게한다.
요청에 나타나는 모든 헤더가 요청헤더인것은 아니다. 예를 들어, POST 요청에 나타나는 Content-Length는 실제로 요청 메시지 바디의 크기를 참조하는 entity header다. 하지만 엔티티 헤더는 종종 컨텍스트와 같은 요청 헤더라고 불린다.

Representation headers(Entity headers): 이전에는 entity headers로 불렀으며, 바디에 담긴 리소스의 정보(Content-Length, MIME type 등)를 포함하는 헤더다.

요청의 headers는 바디의 데이터와는 관련없는 헤더이지만 Representation(entity)headers에는 바디의 데이터에 관한 정보가 있다.
```

### body

- 요청의 본문은 HTTP messages 구조의 마지막에 위치한다. 모든 요청에 body가 필요로 하지는 않는다.GET, HEAD, DELETE, OPTIONS처럼 서버에 리소스를 요청하는 경우에는 본문이 필요하지 않는다. 보통 (HTML 폼 데이터를 포함하는)POST나 PUT과 같은 일부 요청은 데이터를 업데이트하기 위해 서버에 데이터를 전송한다. 이를 두가지로 나눌 수 있다.

```
단일 리소스 본문(single-resource bodies): 헤더 두개(Content-type 와 Content-Length)로 정의된 단일 파일로 구성된다.
다중 리소스 본문(multiple-resource bodies): 멀티파트 본문으로 구성되는 다중 리소스 본문에서는 파트마다 다른 정보를 지니게 된다. 보통 HTML폼과 관련이 있다. https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types 참고.
```

## 응답(Response)

### status line

- 응답의 첫줄은 status line이라고 부르고 다음과 같은 정보를 포함한다.

```
1. 프로토콜 버전: 보통 HTTP/1.1 이다.
2. 상태 코드 요청의 성공 여부를 나타낸다. 200, 404 혹은 302
3. 상태 텍스트: 짧고 간결하게 상태 코드에 대한 설명을 글로 나타내어 사람들이 HTTP 메시지를 이해하는데 도움이 된다.

상태 줄은 일반적으로 HTTP/1.1 404 Not Found. 같이 생겼음.
```

### headers

- 응답에 들어가는 HTTP headers는 요청 헤더와 동일한 구조를 가진다. 대소문자 구분없는 문자열과 콜론, 값을 입력한다. 값은 헤더에 따라 다르다. 응답의 헤더도 몇가지로 나눌 수 있다.

```
General header: 메세지 전체에 적용되는 헤더. 바디를 통해 전송되는 데이터와는 무관한 헤더.
Response header: 위치 또는 서버 자체에 대한 정보(이름, 버전 등)와 같이 응답에 대한 부가적인 정보를 갖는 헤더. Vary, Accept-Ranges와 같이 상태 줄에 넣기에는 공간이 부족했던 추가정보를 제공한다.
Representation(Entity) header: 이전에는 entity header로 불렸다. 바디에 담긴 리소스의 정보(Content-Length, MIME type 등)를 포함하는 헤더. 당연히 요청 내에 본문이 없는 경우 entity header는 전송되지 않는다.
```

### body

- 응답의 본문은 HTTP messages 구조의 마지막에 우치한다. 모든 응다에 바디가 필요로 하지는 않는다. 201, 204와 같은 상태 코드를 가지는 응답에는 본문이 필요하지 않는다. 응답의 바디는 두 종류로 나눌 수 있다.

```
Single-resource bodies(단일-리소스 본문):
  - 길이가 알려진 단일-리소스 본문은 두개의 헤더(Content-Type, Content-Length)로 정의한다.
  - 길이를 모르는 단일 파일로 구성된 단일-리소스 본문은 Transfer-Encoding이 chunked로 설정되어 있으며, 파일은 chunk로 나뉘어 인코딩 되어있다.
Multiple-resource bodies(다중-리소스 본문): 서로 다른 정보를 담고 있는 바디다.
```

## stateless

- stateless는 말 그대로 상태를 가지지 않는다는 뜻이다. HTTP로 클라이언트와 서버가 통신을 주고 받는 과정에서 HTTP가 클라이언트나 서버의 상태를 확인하지 않는다. 사용자는 쇼핑몰에 로그인하거나 상품을 클릭해서 상세 화면으로 이동하고, 상품을 카트에 담거나 로그아웃을 할 수도 있다. 클라이언트에서 발생한 이런 모든 상태를 HTTP 통신이 추적하지는 않는다. 만약 쇼핑몰에서 카트에 담기 버튼을 눌렀을 때, 카트에 담긴 상품 정보(상태)를 저장해야하는데, HTTP는 통신 규약일 뿐, 상태를 저장하거나 하지는 않는다.(무상태, 비연결성) 따라서 필요에 따라 (쿠키-세션,API 등)을 통해 상태를 저장하고 확인할 수있다.
