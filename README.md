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

###
