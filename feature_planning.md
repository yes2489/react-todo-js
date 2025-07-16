## TODO 추가기능
### 1. 중요도 추가 및 정렬
 - `priority` 필드 추가(`low`, `medium`, `high`)
 - 드롭다운 UI로 중요도 선택 (🔥🔥🔥 | 🔥🔥 | 🔥) 
 - 중요도 값 기준으로 정렬(`high` > `medium` > `low`)

### 2. 로컬스토리지 기능
 - 앱이 처음 실행될 때, localStorage에 저장된 할 일이 있으면 불러오기
   → localStorage가 비어 있을 경우 dummyTodos로 초기화
 - todos 상태가 변경될 때마다 localStorage에 저장
