# CRM101
청년crm101 2조 도채범 입니다.

프로젝트 중 제가 맡은 두 가지 기능입니다.
1. 뉴스 검색 결과를 보여주는 커스텀 컴포넌트
2. 필터링 기능이 있는 상품 목록 샘플 앱을 Org에 배포하기

---

## 1. 뉴스 검색 결과를 보여주는 커스텀 컴포넌트
![스크린샷 2024-03-28 220702](https://github.com/ananaskimchi/CRM101/assets/141298734/02bd0c47-05ce-4030-9293-938c091fed1a)
newsComponent Apex Class와 newsComponent LWC로 구현했습니다.    
Account Record에 진입시 해당 Account의 Name 필드 값을 NewsAPI에 쿼리 스트링으로 전달해 관련 검색 결과를 보여주도록 했습니다.

---
## 2. 필터링 기능이 있는 상품 목록 샘플 앱을 Org에 배포하기
![스크린샷 2024-03-28 222231](https://github.com/ananaskimchi/CRM101/assets/141298734/bf1f0089-8ff5-4b1e-aa14-622966971a01)
샘플 앱에서 필터링 기능을 가져와 사용했습니다.   
크게 productFilter, productTileList, productCard 컴포넌트로 구성되어 있습니다.   

productFilter에서 키워드, 슬라이더를 통한 가격대, 상품 특성별 필터링이 가능합니다.   
productTileList에서 필터링을 만족하는 상품들이 표시됩니다.   
productCard에서는 productTileList에서 선택한 상품의 상세 정보를 표시합니다.
