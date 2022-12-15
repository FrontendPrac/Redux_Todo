import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"; // useSelector, useDispatch API 임포트
import { deleteTodo } from "../../redux/modules/todos"; // deleteTodo function 임포트

const List = () => {
    // store에 있는 state 가져오기
    const todos = useSelector((state) => state.todos.todos);
    // console.log(todos);

    // dispatch 사용 준비
    const dispatch = useDispatch();

    // TODO: delete기능 구현하기
    // deleteTodoHandler function
    const deleteTodoHandler = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id);
        console.log(newTodo);
        dispatch(deleteTodo({newTodo}));
        // setTodos(newTodo);
    };

    // const deleteTodoHandler = (id) => {
    //     const newTodo = todos.filter((todo) => todo.id !== id);
    //     setTodos(newTodo);
    // };

    // 완료,취소 button function
    // const changeIsDoneHandelr = (id) => {
    //     const newIsDone = todos.map((todo) => {
    //         if (todo.id === id) {
    //             return {
    //                 ...todo,
    //                 isDone: !todo.isDone,
    //             };
    //         } else {
    //             return { ...todo };
    //         }
    //     });
    //     setTodos(newIsDone);
    // };

    return (
        <StList className="list-container">
            <StListTitle className="list-title">Working.. 🔥</StListTitle>
            <StListWrapper id="work-section" className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                        return (
                            <StTodo key={todo.id} className="todo-container">
                                <div>
                                    <h2 className="todo-title">{todo.title}</h2>
                                    <div>{todo.content}</div>
                                </div>
                                <StButtonSet className="button-set">
                                    <StDeleteButton
                                        className="todo-delete-button button"
                                        onClick={() => {
                                            deleteTodoHandler(todo.id);
                                        }}
                                    >
                                        삭제하기
                                    </StDeleteButton>
                                    <StCompleteButton
                                        className="todo-complete-button button"
                                        // onClick={() => {
                                        //     changeIsDoneHandelr(todo.id);
                                        // }}
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
                                <div>
                                    <h2 className="todo-title">{todo.title}</h2>
                                    <div>{todo.content}</div>
                                </div>
                                <StButtonSet className="button-set">
                                    <StDeleteButton
                                        className="todo-delete-button button"
                                        // onClick={() => {
                                        //     deleteTodoHandler(todo.id);
                                        // }}
                                    >
                                        삭제하기
                                    </StDeleteButton>
                                    <StCompleteButton
                                        className="todo-complete-button button"
                                        // onClick={() => {
                                        //     changeIsDoneHandelr(todo.id);
                                        // }}
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
