import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();

  const params = useParams();
  console.log(params.id);

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const result = todos.find((todo) => todo.id === params.id);
  console.log(result);

  return (
    <StDetail>
      <h1>{params.id}</h1>
      <button onClick={() => navigate("/")}>돌아가기</button>
    </StDetail>
  );
};

const StDetail = styled.div`
  border: 2px solid teal;
  border-radius: 10px;
  padding: 10px;
`;

export default Detail;
