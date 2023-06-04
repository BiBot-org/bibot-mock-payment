# Bibot Mock Payment Service

_Bibot OCR 기반 자동 영수증 경비 처리 서비스와 연계되는 유틸리티 서비스 입니다._

실제 카드사와 연동한 것과 같이 가상 결제가 일어났을 때 영수증 이미지를 생성 해 주는 프로그램입니다.

# 주요 기능

- 가상 결제 및 영수증 이미지 생성 기능
- Keycloak 기반 로그인 및 로그아웃

# 기술 스택

- Back-end
  - Spring Boot
  - PostgreSQL
  - Apache Kafka & Zookeeper
- Front-end
  - Next.js 13.4.4
    - NextAuth
  - Typescript
- Infra Structure
  - Keycloak
  - Docker
