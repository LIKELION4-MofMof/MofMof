# 한국의 첫 번째 모프계산기, MofMof 🦎
![발표 메인](https://user-images.githubusercontent.com/117807467/233196822-125d3e8f-57c1-4725-92ce-d894ed77a76a.PNG)


## [🦎 HOME PAGE](https://like14-mofmof.netlify.app/)

## [📝 MofMof Wiki](https://github.com/LIKELION4-MofMof/MofMof/wiki)

팀원 소개, 데일리 스크럼, 주간 Sprint 계획 및 리뷰, Ground Rule 등 프로젝트 과정이 담겨있는 공간입니다.

## 💡 기획 의도

### 모프(morph)란?

Polymorphism 단어에서 파생되었으며 다형성이라는 뜻을 가지고 있습니다. 다형성이란, 같은 종의 생물이지만 모습이나 고유한 특징이 다양한 성질을 말합니다. 예를 들어, 펫테일 게코라는 같은 도마뱀 종류더라도 모프에 따라서 색깔과 무늬, 패턴 이 등이 다른 생김새를 가지게 됩니다.

### PMI

- **Plus** : 한국어로 제공하는 모프계산기 서비스(국내 유일), 입문자들을 위한 모프 소개 정보 제공  
- **Minus** : 도마뱀 시장에서 가장 적은 비율을 차지하고 있는 종류인 펫테일 게코를 우선하여 서비스 제공  
- **Interest** : 브랜드 color와 도마뱀 이미지를 사용하여 유저들에게 친근함과 우수한 사용자 경험 제공

### STP + 벤치마킹

- **Segmentation** : 국내 모프계산기 서비스가 존재하지 않음, 파충류 시장 소비자들이 이용하고 있는 ['파사모'](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=kmjk1515&logNo=40173898412) 카페에 모프와 관련된 유사한 질문글이 많이 게시되고 있음
- **벤치마킹(Benchmarking)** : [모프마켓](https://www.morphmarket.com/), 영어로 되어있는 외국 모프계산기 사이트
- **Targeting** : 도마뱀을 키우기 시작하여 정보를 얻고자 하는 입문자
- **Positioning : 한국어로 모프 계산기 서비스를 제공하는 유일한 플랫폼**

## 🏆 프로젝트 목표

- [skill] 4가지 주요 기능 구현(모프계산기, 모프 소개, 메인 페이지, 게시판)
- [relationship] 혼자서 고민하지 말고 다같이 소통하기

## ✨ 디자인
![디자인2](https://user-images.githubusercontent.com/117807467/233189867-ec24c143-c50d-4a2e-a913-6abe0637e9c6.PNG)
![디자인3](https://user-images.githubusercontent.com/117807467/233189897-c13268ef-2041-47fb-a972-815c6001d8f0.PNG)

## 🔎 기술 스택
- **Front-End** : CRA, styled-components, React Router
- **Back-End** : firebase
- **Collaborate** : git, GitHub, Figma, Discord

## 👀 프로젝트 주요 기능
### 모프 계산기(입력) : 부모 도마뱀의 각 유전자 값을 입력하는 페이지 입니다.
- ✅ 주요 기능 : 전체 모프 리스트 확인, 모프 검색, 선택한 모프 취소 기능, 입력한 값 초기화, 6개 이상 모프 선택 제한, 중복 모프 선택 제한
![모프계산기1](https://user-images.githubusercontent.com/117807467/233194380-c436cbd5-1d90-4745-93d2-cec595d77520.PNG)

### 모프 계산기(결과) : 유저가 입력한 부모 모프 값을 바탕으로 퍼넷스퀘어 결과 값을 보여주는 페이지 입니다.
- ✅ 주요 기능 : 결과 값을 원형 그래프로 구현(react rechats 사용)하여 결과 % 비율을 pie 안에 위치, 결과값을 데이터 표로 구현, 다시하기 버튼 클릭시 입력페이지로 이동, 사용법 안내
![모프계산기2](https://user-images.githubusercontent.com/117807467/233194402-9c66c3f2-932c-4c7d-a06d-6f121f47f64d.PNG)
![모프계산기3](https://user-images.githubusercontent.com/117807467/233194436-ccdf316c-8f85-42f7-a270-e1d86052e217.PNG)

### 모프 소개 : 입문자에게 모프 정보를 제공하는 MofMof만의 차별화된 서비스 페이지 입니다.
- ✅ 주요 기능 : 전체 모프 리스트 확인, 모프 검색, 필터링
![모프소개](https://user-images.githubusercontent.com/117807467/233195458-84db3322-0061-4e75-bb16-36b3b00ed6ff.PNG)

### 모프 상세 페이지 : 더 많은 모프 이미지와 자세한 정보가 담긴 페이지 입니다.
- ✅ 주요 기능 : 이미지 크게 보기
![모프상세](https://user-images.githubusercontent.com/117807467/233195621-8d0e5fe1-5e6a-4ffa-b557-df65958ac220.PNG)

### 스플래쉬/메인페이지
![스플래쉬](https://user-images.githubusercontent.com/117807467/233196017-78a5a1fc-2bb5-4fbf-8fbc-602a4a759682.PNG)
![메인](https://user-images.githubusercontent.com/117807467/233196038-9da1cd82-fcdd-4cbb-8311-91d1123e12b7.PNG)
### 로그인/회원가입
![로그인](https://user-images.githubusercontent.com/117807467/233196532-2de5ffa1-2207-4d4f-b759-4401e7d74ed7.PNG)
![회원가입](https://user-images.githubusercontent.com/117807467/233196554-2dc09294-54f1-4425-adc3-6690089ef95c.PNG)

## 🚀 프로젝트 사용법
```
npm i

npm start

# or

yarn

yarn start
```
