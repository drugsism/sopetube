# sopeTube

### Clone Youtube with Vaniliajs and Nodejs
Javascript와 nodejs를 사용해서 초보 개발자에게 js stack의 기초를 학습하도록 만든 커리큘럼


### 학습목차
상세 설명은 각 항목별 주석으로 풀어 작성한다.

- [x] 디렉토리 생성 
    - 프로젝트 이름으로 폴더 생성
    - cd foldername
- [x] npm 설치
    - npm 설명
    - npm 설치
- [x] npm init
    - packeage.json 생성
- [x] package.json 정리
- [x] express 설치
- [x] express 공식 홈페이지 
    - Hello world예제
    - node_modules 에서 불러오는 방식
      - node-modules/express/index.js - lib/express.js
    - routing해서 확인
      - req, res object res.send('')
- [x] 최신 Javascript를 사용하기위해 babel세팅
    - npm install @babel/core @babel/node @babel/preset-env
    - .babelrc 파일 생성 후 Preset 설정
    - ES6의 기본 문법
      - arrow function
      - import modules
    - nodemon설치 
      - dependenceies 설명 --save -dev
      - 잊지말고 package.json 수정 nodemon --exec babel-node index.js