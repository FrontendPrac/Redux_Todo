import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <StHeader>
            <div>My Todo List</div>
            <div>React</div>
        </StHeader>
    );
};

const StHeader = styled.div`
    height: 50px;
    padding: 0 20px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Header;
