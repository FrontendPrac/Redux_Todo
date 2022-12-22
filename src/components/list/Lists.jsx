// import React, { useEffect, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import List from "./List";
import { __getTodos } from "../../redux/modules/todosSlice";

const Lists = ({ isActive }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const { isLoading, error, todos } = useSelector((state) => state.todos);

  if (isLoading) {
    return <div>로딩 중 ...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <StListTitle className="list-title">
        {isActive === true ? "Done..! 🎉" : "Working.. 🔥"}
      </StListTitle>
      {todos
        .filter((todo) => {
          return todo.isDone === isActive;
        })
        .map((todo) => {
          return <List isActive={isActive} todo={todo} key={todo.id} />;
        })}
    </>
  );
};

const StListTitle = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export default Lists;
