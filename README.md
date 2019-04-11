# sopeTube

### Clone Youtube with Vaniliajs and Nodejs
Javascript와 nodejs를 사용해서 초보 개발자에게 js stack의 기초를 학습하도록 만든 커리큘럼


### 학습목차
상세 설명은 각 항목별 주석으로 풀어 작성한다.

- [ ] 디렉토리 생성 
    - 프로젝트 이름으로 폴더 생성
    - cd foldername
- [ ] npm 설치
    - npm 설명
    - npm 설치
- [ ] npm init
    - packeage.json 생성
- [ ] package.json 정리
- [ ] express 설치
- [ ] express 공식 홈페이지 
    - Hello world예제
    - node_modules 에서 불러오는 방식
      - node-modules/express/index.js - lib/express.js
    - routing해서 확인
      - req, res object res.send('')
- [ ] 최신 Javascript를 사용하기 위한 babel세팅
    - npm install @babel/core @babel/node @babel/preset-env
    - .babelrc 파일 생성 후 Preset 설정
    - ES6의 기본 문법
      - arrow function
      - import modules
    - nodemon설치 
      - dependenceies 설명 --save -dev
      - 잊지말고 package.json 수정 nodemon --exec babel-node index.js
      - delay 2 option babel이 코드를 변환할 시간을 준다
- [ ] Middleware
    - 기능 설명
    - request, response, next
    - morgan, body-parser, cookie-parser, helmet 각 middleware 설명
- [ ] init 모듈 분기
    - ES6 모듈 설명
    - app export default
    - package.json start수정
- [ ] Route 설명
    - router.js 생성
    - user route... 예시
    - routes 분기 -single source of truth
    - app.js, routes.js and each routers 설명
- [ ] MVC Pattern
    - Controller 로직
    - constrollers 폴더 생성
      - userController.js, videoController.js 생성
    - controller는 routes의 response 실행부분을 export
    - 각 router의 res.send 실행부를 controller로 분기

