# 사이트 홈페이지 제작 (개인작업)
              
# 스타워즈 쇼핑몰

<a href="깃/dist/" target="_blank">
<img src="./public/images/sw_logo.jpg" width="150px">
</a>

<br>
<br>

# 사용 기술  

- [X] React
- [X] Styled-Components
- [X] Router 
- [X] Redux-toolkit


## 프로젝트 주요 기능
1. 회원가입, 로그인
2. 장바구니
3. 정렬
4. 검색
5. 게시판

## 프로젝트 작업 순서
1. 자료조사 및 사이트 참고
2. 디자인 계획 및 마크업
3. React  / Styled-Components / Redux-toolkit 사용

# 프로젝트 기능 구현

### 1) 제품페이지

* 영어제품(대소문자 구별) 검색 구현
* order 클릭시 장바구니 해당 제품 장바구니 이동
* 해당제품 클릭시 팝업으로 상세내용 표시 (구현 예정)
* 제품 order 수량 추가 (구현예정)
* 제품명, 가격 , 카테고리 별로 정렬
<img src="./public/readme/Product_readme.gif">

### 2) 공지사항 게시판

* 로컬에 있는 데이터 map 출력
* 해당 게시글 클릭시 상세내용 이동
* 목록으로 이동시 라우터 처리
* next 및 번호 클릭시 페이지네이션 적용
<!-- <img src="./mdImages/testView.gif"> -->

### 3) 고객문의 게시판

* 공지사항 게시판과 동일한 기능 구현
* 글 작성 수정 Create(생성), Read(읽기), Update(갱신), Delet(삭제)기능
<img src="./public/readme/CRUD_readme.gif">

### 4) 로그인 회원가입
* 회원가입시 데이터 이메일, 닉네임 , 비밀번호 로컬스토리지 저장(구현예정)
* 회원가입시 등록된 가데이터로 로그인 기능 구현 (구현예정)
* 로그인시에 화면상단에 로그아웃 버튼 - 닉네임이 출력되도록 구현 (구현예정)
* 로그인시에만 글작성 수정 삭제 가능하도록 구현 (구현예정)
<!-- <img src="./mdImages/testView.gif"> -->

### 5) 장바구니
* 제품페이지에 추가된 물품 수량 증가 감소시 총 가격에 반영
* 각 제품당 재고 수량에 맞춰서 증가 감소 적용 (구현예정 => 완료) 
* 체크 박스 체크시 해당 제품만 삭제 가능하도록 기능 구현 (구현예정 => 완료)
* 장바구니 전체삭제 체크박스 선택삭제 기능 구현 (구현예정 => 완료) 
<img src="./public/readme/Cart_readme.gif">
