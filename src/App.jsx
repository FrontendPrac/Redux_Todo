import React, { useState } from "react";
import "./App.css";

function App() {
    function Working(props) {
        return (
            <div className="todo-container">
                <div>
                    <h2 className="todo-title">{props.work.title}</h2>
                    <div>{props.work.body}</div>
                </div>
                <div className="button-set">
                    <button
                        className="todo-delete-button button"
                        onClick={() => {
                            props.handleDelete(props.work.id);
                        }}
                    >
                        삭제하기
                    </button>
                    <button className="todo-complete-button button">
                        완료
                    </button>
                </div>
            </div>
        );
    }

    const [working, setWorking] = useState([
        {
            id: 1,
            title: "리액트 공부하기",
            body: "리액트 기초를 공부해봅시다",
            isDone: false,
        },
        {
            id: 2,
            title: "리액트 공부하기",
            body: "리액트 기초를 공부해봅시다",
            isDone: true,
        },
    ]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitHandler = () => {
        const newWorking = {
            id: working.length + 1,
            title: title,
            body: body,
            isDone: false,
        };
        setWorking([...working, newWorking]);
    };

    const onDeleteHandler = (id) => {
        const newWorkingList = working.filter((work) => work.id !== id);
        setWorking(newWorkingList);
    };

    // const onChangeHandler = (id) => { }

    return (
        <div className="layout">
            <div className="container">
                <div>My Todo List</div>
                <div>React</div>
            </div>
            <div className="add-form">
                <div className="input-group">
                    <label className="form-label">제목</label>
                    <input
                        type="text"
                        name="title"
                        className="add-input input body"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className="form-label">내용</label>
                    <input
                        type="text"
                        name="body"
                        className="add-input"
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button className="add-button" onClick={onSubmitHandler}>
                    추가하기
                </button>
            </div>
            <div className="list-container">
                <h2 className="list-title">Working.. 🔥</h2>
                <div id="work-section" className="list-wrapper">
                    {working.map((work) => {
                        return (
                            <Working
                                handleDelete={onDeleteHandler}
                                work={work}
                                key={work.id}
                            ></Working>
                        );
                    })}
                </div>
                <h2 className="list-title">Done..! 🎉</h2>
                <div id="done-section" className="list-wrapper">
                    {/* <div className="todo-container">
                        <div>
                            <h2 className="todo-title">리액트 공부하기</h2>
                            <div>리액트 기초를 공부해봅시다</div>
                        </div>
                        <div className="button-set">
                            <button className="todo-delete-button button">
                                삭제하기
                            </button>
                            <button className="todo-complete-button button">
                                취소
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default App;
