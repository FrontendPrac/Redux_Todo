import React from "react";
import styled from "styled-components";

const Layout = (props) => {
    return <StLayout className="layout">{props.children}</StLayout>;
};

const StLayout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`;

export default Layout;
