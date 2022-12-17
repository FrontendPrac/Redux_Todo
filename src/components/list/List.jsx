import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/modules/todos";
import { switchTodo } from "../../redux/modules/todos";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const List = ({ isActive, todo }) => {
  // const navigate = useNavigate();

  // dispatch 사용 준비
  const dispatch = useDispatch();

  const onClickdeleteHandler = () => {
    console.log(todo.id);
    dispatch(deleteTodo(todo.id));
  };

  const onClickSwithHandler = () => {
    // console.log(todo.id);
    dispatch(switchTodo(todo.id));
  };

  return (
    <StTodo key={todo.id}>
      {/* <button onClick={() => navigate("/detail")}>상세보기</button> */}
      {/* <Link to="/detail">상세보기</Link> */}
      <Link to={`/detail/${todo.id}`}>상세보기</Link>
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.content}</div>
      </div>
      <StButtonSet>
        <StDeleteButton onClick={onClickdeleteHandler}>삭제하기</StDeleteButton>
        <StCompleteButton onClick={onClickSwithHandler}>
          {isActive === true ? "취소" : "완료"}
        </StCompleteButton>
      </StButtonSet>
    </StTodo>
  );
};

const StTodo = styled.div`
  width: 270px;
  padding: 12px 24px 24px;
  border: 4px solid teal;
  border-radius: 12px;
  a {
    text-decoration-line: none;
  }
`;

const StButtonSet = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 10px;
`;

const StCompleteButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  border: 2px solid green;
`;

const StDeleteButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  border: 2px solid red;
`;

export default List;
