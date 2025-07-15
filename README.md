# react-todo-js

React 기반 TODO 구현

## 01. 프로젝트 생성

### vite 빌드툴 활용하여 프로젝트 생성

`npm create vite@latest react-todo-js -- --template react`

### Tailwind 설치

`npm install tailwindcss @tailwindcss/vite`

## 02. 기본 폴더 구조 생성, 할일 관리 UI 작성, 절대 경로(@) 추가(vite.config.js)

### 기본 폴더 구조

```
src/
├── components/ # 기본적인 컴포넌트들을 작성하는 경로
│ ├── todos/ # 할일 관리(특정 도메인)와 관련된 컴포넌트들만 모아둔 경로
│ └── ui/ # 도메인과 관련 없이 어느 곳에서든 공통적으로 사용할 수 있는 범용적인 UI
├── constants/ # 상수로 관리할 값들, 함수 등을 모아둔 경로
├── layouts/ # 레이아웃 용도의 경로
├── contexts/ # Context 관련 경로
└── utils/ # 유틸 함수
```

### 절대 경로(@) 추가

## 03. 할일 조회 기능 구현

- TodoBody가 내부 todos 대신 props로 받은 todos를 렌더링하도록 수정

## 04. 할일 추가 기능 구현

- React Portal을 통해 Modal 컴포넌트 구현
- 할일 등록 처리:
  사용자가 모달에 입력한 Title, Summary 값을 받는 처리
  Add 버튼을 클릭했을 때, 입력받은 값들을 App.jsx로 전달
  App.jsx에 있는 todos 상태를 업데이트

## 05. 할일 수정 기능 구현

- TodoForm 재활용 (add/ update 텍스트 변경)

## 06. 할일 제거 기능 구현

- 선택된 할일 ID를 받아 Array.filter()를 활용
- 휴지통 아이콘 클릭 시 할일 제거

## 07. 필터링 기능 구현

- 카테고리별 필터링 구현
