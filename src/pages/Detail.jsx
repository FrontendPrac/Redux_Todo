import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  // path 가져오기
  const params = useParams();
  console.log(params.id);

  // store에 있는 state 가져오기
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  // useEffect(() => {}, []);

  // todo.id와 path.id 비교하기
  const result = todos.find((todo) => todo.id === params.id);
  console.log(result);

  // navigate 함수 가져오기
  const navigate = useNavigate();

  return (
    <div>
      <h1>{result.id}</h1>
      <h1>{result.title}</h1>
      <h1>{result.content}</h1>
      <button onClick={() => navigate("/")}>돌아가기</button>
    </div>
  );
};

export default Detail;
