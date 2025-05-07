# 🔥 엽기떡볶이 오더 앱

엽기떡볶이 공식 앱 **클론 프로젝트** 입니다. <br>
회원가입/로그인 부터 메뉴 담기, 결제(가상) 등등 실제 앱과 유사하게 구현하는 데 집중했습니다. <br>
추가로 관리자 페이지도 구현하였습니다.

## 👥 팀원 소개

<div align=center>

| <img src="https://avatars.githubusercontent.com/u/145041049?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/180184232?v=4" width="150" height="150"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                      유지원<br/>[@nowwizz](https://github.com/nowwizz)                      |                     장가은<br/>[@zkaakakg](https://github.com/zkaakakg)                      |

</div>

## 🛠️ 기술 스택

| 구분        | 사용 기술                                 |
| ----------- | ----------------------------------------- |
| 🖥️ Frontend | `React`, `JavaScript`                     |
| 🛠️ Backend  | `Spring Boot`, `MySQL`                    |
| 🔐 인증     | `OAuth2` (소셜 로그인), `Spring Security` |

## 🔍 주요 기능

- 회원가입 / 일반 로그인 / 소셜 로그인 / 로그아웃
- 일반 사용자

  - 지점 선택, 메뉴 담기, 토핑 / 사이드 추가 및 삭제, 주문, 결제(가상화면)
  - 마이페이지, 주문내역 조회

- 관리자

  - 매장 등록 및 목록 조회
  - 회원 목록 조회 및 회원 권한 수정
  - 전체 주문 내역 조회

## 🧩 프로젝트 구조

<div style="display: flex; gap: 20px;">
<div style="width: 50%;">
 <h3>📦 프론트엔드</h3>

```
📦src
┣ 📂assets
┃ ┣ 🖼 뒤로가기.png
┃ ┣ 🖼 방문포장.jpg
┃ ┣ 🖼 배너1.jpg
┃ ┣ 🖼 배너2.jpg
┃ ┣ 🖼 배너3.jpg
┃ ┣ 🖼 배달주문.jpg
┃ ┣ 🖼 카트아이콘.png
┃ ┣ 🖼 홈주문.jpg
┃ ┣ 🖼 음식합성표.png
┃ ┣ 🖼 react.svg
┃ ┗ 🖼 x.png
┣ 📂components
┃ ┣ 📄Header.jsx
┃ ┣ 📄Header2.jsx
┃ ┣ 📄OrderListTab.jsx
┃ ┣ 📄StoreTab.jsx
┃ ┗ 📄UserListTab.jsx
┣ 📂pages
┃ ┣ 📄AdminPage.jsx
┃ ┣ 📄JoinPage1.jsx
┃ ┣ 📄JoinPage2.jsx
┃ ┣ 📄JoinPage3.jsx
┃ ┣ 📄LoginPage.jsx
┃ ┣ 📄MainPage.jsx
┃ ┣ 📄MyOrderDetailPage.jsx
┃ ┣ 📄MyOrderListPage.jsx
┃ ┣ 📄MyPage.jsx
┃ ┣ 📄OAuthCallbackPage.jsx
┃ ┣ 📄OrderPage1.jsx
┃ ┣ 📄OrderPage2.jsx
┃ ┣ 📄PayPage1.jsx
┃ ┗ 📄PayPage2.jsx
┣ 📂styles
┃ ┣ 📄AdminPage.module.css
┃ ┣ 📄global.css
┃ ┣ 📄Header.module.css
┃ ┣ 📄Header2.module.css
┃ ┣ 📄JoinPage1.module.css
┃ ┣ 📄JoinPage2.module.css
┃ ┣ 📄JoinPage3.module.css
┃ ┣ 📄LoginPage.module.css
┃ ┣ 📄MainPage.module.css
┃ ┣ 📄MyOrderDetail.module.css
┃ ┣ 📄MyOrderList.module.css
┃ ┣ 📄MyPage.module.css
┃ ┣ 📄OrderListTab.module.css
┃ ┣ 📄OrderPage1.module.css
┃ ┣ 📄OrderPage2.module.css
┃ ┣ 📄PayPage1.module.css
┃ ┣ 📄PayPage2.module.css
┃ ┣ 📄StoreTab.module.css
┃ ┗ 📄UserListTab.module.css
┗ 📄main.jsx
```

</div>
  <div style="width: 50%;">
    <h3>📦 백엔드</h3>

```
📦src
┣ 📂controller
┃ ┣ 📄AdminController.java
┃ ┣ 📄MainController.java
┃ ┣ 📄OrderController.java
┃ ┣ 📄StoreController.java
┃ ┗ 📄UserController.java
┣ 📂dto
┃ ┣ 📄OrderDto.java
┃ ┣ 📄OrderItemDto.java
┃ ┣ 📄OrderRequestDto.java
┃ ┣ 📄StoreDto.java
┃ ┗ 📄UserDto.java
┣ 📂entity
┃ ┣ 📂valueobject
┃ ┃ ┣ 📄Side.java
┃ ┃ ┗ 📄Topping.java
┃ ┣ 📄Order.java
┃ ┣ 📄OrderItem.java
┃ ┣ 📄Store.java
┃ ┗ 📄User.java
┣ 📂enumeration
┃ ┣ 📄OrderStatus.java
┃ ┗ 📄UserRole.java
┣ 📂repository
┃ ┣ 📄OrderItemRepository.java
┃ ┣ 📄OrderRepository.java
┃ ┣ 📄StoreRepository.java
┃ ┗ 📄UserRepository.java
┣ 📂security
┃ ┣ 📂config
┃ ┃ ┣ 📄SecurityConfig.java
┃ ┃ ┗ 📄WebConfig.java
┃ ┣ 📂jwt
┃ ┃ ┣ 📄JwtAuthenticationFilter.java
┃ ┃ ┗ 📄JwtTokenProvider.java
┃ ┣ 📂oAuth2
┃ ┃ ┣ 📄OAuth2SuccessHandler.java
┃ ┃ ┗ 📄OAuthAttributes.java
┃ ┗ 📂service
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┗ 📄UserDetailService.java
┃ ┃ ┣ 📄OrderService.java
┃ ┃ ┣ 📄StoreService.java
┃ ┃ ┗ 📄UserService.java
```

</div>
</div>

## 📱 데모

### 사용자 화면(일부)

|                                          홈 화면                                          |                                         메뉴 상세                                         |                                       장바구니/결제                                       |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
| ![Image](https://github.com/user-attachments/assets/1847f258-f265-4f82-b6c2-21fdddb4b8f8) | ![Image](https://github.com/user-attachments/assets/06dd82f9-1b8f-48e9-8ff3-a5f6eff99e1f) | ![Image](https://github.com/user-attachments/assets/98387b74-28ce-4071-85e1-6e87c3068963) |

### 관리자 화면(일부)

|                                         매장 관리                                         |                                         회원 목록                                         |                                         주문 목록                                         |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
| ![Image](https://github.com/user-attachments/assets/b2eedd32-f0ce-4589-8881-45f94841e14b) | ![Image](https://github.com/user-attachments/assets/1e92b93a-ceff-4109-9688-8d918cf3b56e) | ![Image](https://github.com/user-attachments/assets/cff000a3-5812-46a9-920e-f85a9c80641a) |

> ### 👉 [시연 영상](https://youtu.be/p7spSqzA2Ww)
