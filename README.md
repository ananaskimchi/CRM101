# CRM101
청년crm101 2조 도채범 입니다.

프로젝트 중 제가 맡은 두 가지 기능입니다.
1. 뉴스 검색 결과를 보여주는 커스텀 컴포넌트
2. 필터링 기능이 있는 상품 목록 샘플 앱을 Org에 배포하기

---

## 1. 뉴스 검색 결과를 보여주는 커스텀 컴포넌트
![image](https://github.com/ananaskimchi/CRM101/assets/141298734/4e42646f-6394-48e9-ba0c-d990070d35c6)
newsComponent Apex Class와 newsComponent LWC로 구현했습니다.    
Account Record에 진입시 해당 Account의 Name 필드 값을 NewsAPI에 쿼리 스트링으로 전달해 관련 검색 결과를 보여주도록 했습니다.
