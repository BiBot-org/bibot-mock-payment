# Bibot Mock Payment Service
![Screenshot from 2023-06-04 22-41-34](https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/e1f1bdef-bcb9-402e-90e8-4784f0692813)

_Bibot OCR 기반 자동 영수증 경비 처리 서비스와 연계되는 유틸리티 서비스 입니다._

실제 카드사와 연동한 것과 같이 가상 결제가 일어났을 때 영수증 이미지를 생성 해 주는 프로그램입니다.


# 주요 기능
<div>
  <div>
    <h2>Keycloak 기반 로그인 및 로그아웃</h2>
    <h3>로직 순서도</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/5287db47-b554-4404-bb11-bab1ddde99d7"/>
    <h3>로그인 화면</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/72c199b4-80ad-43cd-8782-5052cc2cd0b0"/>
  </div>
  <div>
    <h2>가상 카드 결제 및 가상 영수증 생성 기능</h2>
    <h3>로직 순서도</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/2fbdea19-51e7-47f8-8f88-ec2edb398d6a"/>
    <h3>가게 정보 입력</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/001be6e2-617a-408c-b6f5-89cdc1a62f5c"/>
    <h3>상품 추가</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/5b46507d-69e7-4360-85c2-33012d449398"/>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/0c3d8066-0c62-44ec-968b-9e46d8b4d4d8" />
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/c4937d36-e08a-49d4-9ce5-d95de3c6b916" />
    <h3>가상 결제 및 영수증 이미지 생성</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/063d0976-a2bd-40a0-b856-fefd1bcb87fa"/>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/871f715e-753e-408a-9561-5bef62fc0f8b" />
    <h3> Kafka로 전달 된 결제 정보 메시지 예시</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/128a1e8a-ef96-439f-9cec-449d5566d6b3" />
    <h3>생성 된 영수증 예시</h3>
    <img src="https://github.com/BiBot-org/bibot-mock-payment/assets/36991763/f1dd2791-c13f-4a26-a335-4cd1ab775e48" width="40%" height="auto" />
  </div>
</div>

# 기술 스택

## Backend
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot"/>
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL"/> 
<img src="https://img.shields.io/badge/Apache Kafka-231F20?style=for-the-badge&logo=Apache kafka"/> 

- Spring Boot 3.0.6
- PostgreSQL 15
- Apache Kafka 2.13-2.8.1

## Frontend
<img src="https://img.shields.io/badge/react-ffffff?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js"/>
<img src="https://img.shields.io/badge/TypeScript-ffffff?style=for-the-badge&logo=TypeScript"/>  
<img src="https://img.shields.io/badge/envcmd-ffffff?style=for-the-badge&logo=dotenv"/>
<img src="https://img.shields.io/badge/reactquery-ffffff?style=for-the-badge&logo=reactquery"/> 
<img src="https://img.shields.io/badge/pwa-5A0FC8?style=for-the-badge&logo=pwa"/> 
<img src="https://img.shields.io/badge/recoil-000000?style=for-the-badge&logo=recoil"/> 
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios"/>

- React 18.2.0
- Typescript 5.1.3 
- Next.js 13.4.4
- Next-auth 4.22.1
## Infra
<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker"/>
<img src="https://img.shields.io/badge/keycloak-008aaa?style=for-the-badge&logo=data:image/svg+xml;base64,PCEtLSBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiB0aGlzIGVkaXRvciB3aXRoIHlvdXIgU1ZHIGNvZGUgLS0+Cgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MTIiIHN0eWxlPSJmaWxsOiMwMDhhYWEiLz4KICAgPHBhdGggZD0iTTc4Ni4yIDM5NS41aC04MC42Yy0xLjUgMC0zLS44LTMuNy0yLjFsLTY0LjctMTEyLjJjLS44LTEuMy0yLjItMi4xLTMuOC0yLjFoLTI2NGMtMS41IDAtMyAuOC0zLjcgMi4xbC02Ny4zIDExNi40LTY0LjggMTEyLjJjLS43IDEuMy0uNyAyLjkgMCA0LjNsNjQuOCAxMTIuMiA2Ny4yIDExNi41Yy43IDEuMyAyLjIgMi4yIDMuNyAyLjFoMjY0LjFjMS41IDAgMy0uOCAzLjgtMi4xTDcwMiA2MzAuNmMuNy0xLjMgMi4yLTIuMiAzLjctMi4xaDgwLjZjMi43IDAgNC44LTIuMiA0LjgtNC44VjQwMC40Yy0uMS0yLjctMi4zLTQuOS00LjktNC45ek00NzcuNSA2MzAuNmwtMjAuMyAzNWMtLjMuNS0uOCAxLTEuMyAxLjMtLjYuMy0xLjIuNS0xLjkuNWgtNDAuM2MtMS40IDAtMi43LS43LTMuMy0ybC02MC4xLTEwNC4zLTUuOS0xMC4zLTIxLjYtMzYuOWMtLjMtLjUtLjUtMS4xLS40LTEuOCAwLS42LjItMS4zLjUtMS44bDIxLjctMzcuNiA2NS45LTExNGMuNy0xLjIgMi0yIDMuMy0ySDQ1NGMuNyAwIDEuNC4yIDIuMS41LjUuMyAxIC43IDEuMyAxLjNsMjAuMyAzNS4yYy42IDEuMi41IDIuNy0uMiAzLjhsLTY1LjEgMTEyLjhjLS4zLjUtLjQgMS4xLS40IDEuNiAwIC42LjIgMS4xLjQgMS42bDY1LjEgMTEyLjdjLjkgMS41LjggMy4xIDAgNC40em0yMDIuMS0xMTYuN0w2NTggNTUwLjhsLTUuOSAxMC4zTDU5MiA2NjUuNGMtLjcgMS4yLTEuOSAyLTMuMyAyaC00MC4zYy0uNyAwLTEuMy0uMi0xLjktLjUtLjUtLjMtMS0uNy0xLjMtMS4zbC0yMC4zLTM1Yy0uOS0xLjMtLjktMi45LS4xLTQuMmw2NS4xLTExMi43Yy4zLS41LjQtMS4xLjQtMS42IDAtLjYtLjItMS4xLS40LTEuNmwtNjUuMS0xMTIuOGMtLjctMS4yLS44LTIuNi0uMi0zLjhsMjAuMy0zNS4yYy4zLS41LjgtMSAxLjMtMS4zLjYtLjQgMS4zLS41IDIuMS0uNWg0MC40YzEuNCAwIDIuNy43IDMuMyAybDY1LjkgMTE0IDIxLjcgMzcuNmMuMy42LjUgMS4yLjUgMS44IDAgLjQtLjIgMS0uNSAxLjZ6IiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPg=="/>  

# 후기
- Kafka를 통해 비동기적인 로직 처리를 구현하였습니다. 사실 로직의 난이도 상 굳이 비동기 처리로 할 필요도, Kafka를 통해 이벤트 기반으로 결제와 이미지 생성을 분리 할 필요는 없었습니다.
- 하지만, 두가지 로직을 분리 함으로써 부하 분산의 효과가 있다는 걸 알게 되었습니다. 결제 처리는 결제 처리대로 빠르게, 이미지 생성은 결제와는 무관하게 독자적으로 처리됩니다.
- 요청 하나의 응답 시간을 줄여줌으로써 퍼포먼스를 낼 수 있다는 것을 알게되었습니다.
- 서버사이드 이벤트를 통해 이미지를 전달 받는 방식으로 업그레이드 해볼 예정입니다!



