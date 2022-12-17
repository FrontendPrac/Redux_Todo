import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>잘못된 주소입니다</div>
      <button onClick={() => navigate("/")}>돌아가기</button>
    </>
  );
};

export default NotFound;
