# TodoList 리덕스 리펙토링

> 기능

- 추가 : addTodo
- 삭제 : deleteTodo
- 수정 : switchTodo
- 페이지 이동 : 동적 라우팅(12.19)

> 적용한 개념

- action, actioncreator, reducer
- map, filter, find
- react-router-dom
- useState, useSelector, useDispatch
- useParams, useNavigate, Link
- styled-components
- redux-toolkit(12.20)
- jason-server(12.20)

> 버그

- 새로고침 시 uuid리셋으로 인한 Detail 컴포넌트 상태 관리 문제
