import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"; // useSelector, useDispatch API 임포트
import { deleteTodo } from "../../redux/modules/todos"; // deleteTodo function 임포트
import { switchTodo } from "../../redux/modules/todos"; // swithTodo function 임포트
import { Link } from "react-router-dom";

const List = () => {
    // store에 있는 state 가져오기
    const todos = useSelector((state) => state.todos.todos);
    // console.log(todos);

    // dispatch 사용 준비
    const dispatch = useDispatch();

    // deleteTodoHandler function
    const deleteTodoHandler = (event) => {
        // dispatch(deleteTodo())
    }

    // dispatch(
    //     addTodo({
    //         id: uuidv4(),
    //         title: title,
    //         content: content,
    //         isDone: false,
    //     })
    // );

    const switchTodoHandler = () => {
        // dispatch(deleteTodo())
    }

    return (
        <StList className="list-container">
            <StListTitle className="list-title">Working.. 🔥</StListTitle>
            <StListWrapper id="work-section" className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                        return (
                            <StTodo key={todo.id} className="todo-container">
                                <Link to="/">상세보기</Link>
                                <div>
                                    <h2 className="todo-title">{todo.title}</h2>
                                    <div>{todo.content}</div>
                                </div>
                                <StButtonSet className="button-set">
                                    <StDeleteButton
                                        className="todo-delete-button button"
                                        onClick={deleteTodoHandler}
                                    >
                                        삭제하기
                                    </StDeleteButton>
                                    <StCompleteButton
                                        className="todo-complete-button button"
                                        onClick={switchTodoHandler}
                                    >
                                        완료
                                    </StCompleteButton>
                                </StButtonSet>
                            </StTodo>
                        );
                    }
                })}
            </StListWrapper>
            <StListTitle className="list-title">Done..! 🎉</StListTitle>
            <StListWrapper id="done-section" className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone === true) {
                        return (
                            <StTodo key={todo.id} className="todo-container">
                                <Link to="/">상세보기</Link>
                                <div>
                                    <h2 className="todo-title">{todo.title}</h2>
                                    <div>{todo.content}</div>
                                </div>
                                <StButtonSet className="button-set">
                                    <StDeleteButton
                                        className="todo-delete-button button"
                                        onClick={deleteTodoHandler}
                                    >
                                        삭제하기
                                    </StDeleteButton>
                                    <StCompleteButton
                                        className="todo-complete-button button"
                                        onClick={switchTodoHandler}
                                    >
                                        취소
                                    </StCompleteButton>
                                </StButtonSet>
                            </StTodo>
                        );
                    }
                })}
            </StListWrapper>
        </StList>
    );
};

const StList = styled.div`
    padding: 0 24px;
`;

const StListTitle = styled.h2`
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const StListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const StTodo = styled.div`
    width: 270px;
    padding: 12px 24px 24px;
    border: 4px solid teal;
    border-radius: 12px;
    a {text-decoration-line : none;
    }`;

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
