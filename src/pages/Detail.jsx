import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log(param);

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const todo = todos.find((todo) => todo.id === parseInt(param.id));
  console.log(todo);

  const navigate = useNavigate();

  return (
    <div>
      <h1>id</h1>
      <h1>title</h1>
      <h1>content</h1>
      <button onClick={() => navigate("/")}>돌아가기</button>
    </div>
  );
};

export default Detail;
