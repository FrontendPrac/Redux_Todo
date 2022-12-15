import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"; // useSelector, useDispatch API 임포트
import { addTodo } from "../../redux/modules/todos";  // addTodo function 임포트
import { v4 as uuidv4 } from 'uuid'; 

const Form = () => {
    // store에 있는 state 가져오기
    const todos = useSelector((state) => state.todos.todos);

    // dispatch 사용 준비
    const dispatch = useDispatch();

    // title, content state 생성
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    // title update function
    const onChangeTitleHandler = (event) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
    };

    // content update function
    const onChangeContentHandler = (event) => {
        const newContent = event.target.value;
        setContent(newContent);
    };

    // onSubmitHandler function
    const onSubmitHandler = (event) => {
        if (
            document.querySelector(".input-title").value === "" ||
            document.querySelector(".input-content").vlaue === ""
        ) {
            event.preventDefault();
        } else {
            event.preventDefault();
            dispatch(
                addTodo({
                    id: uuidv4(),
                    title: title,
                    content: content,
                    isDone: false,
                })
            );
            setTitle("");
            setContent("");
            // console.log(todos);
        }
    };

    return (
        <StAddForm className="add-form">
            <StInputGroup className="input-group">
                <StFormLabel className="form-label">제목</StFormLabel>
                <StInputTitle
                    type="text"
                    name="title"
                    value={title || ""}
                    className="input-title"
                    onChange={onChangeTitleHandler}
                />
                <StFormLabel className="form-label">내용</StFormLabel>
                <StInputContent
                    type="text"
                    name="content"
                    value={content || ""}
                    className="input-content"
                    onChange={onChangeContentHandler}
                />
            </StInputGroup>
            <StAddButton className="add-button" onClick={onSubmitHandler}>
                추가하기
            </StAddButton>
        </StAddForm>
    );
};

const StAddForm = styled.form`
    margin: 0 auto;
    padding: 30px;
    border-radius: 12px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
`;

const StInputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const StFormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`;

const StInputTitle = styled.input`
    width: 240px;
    height: 40px;
    padding: 0 12px;
    border: none;
    border-radius: 12px;
`;

const StInputContent = styled.input`
    width: 240px;
    height: 40px;
    padding: 0 12px;
    border: none;
    border-radius: 12px;
`;

const StAddButton = styled.button`
    width: 140px;
    height: 40px;
    color: #fff;
    background-color: teal;
    font-weight: 700;
    border: none;
    border-radius: 10px;
`;

export default Form;
