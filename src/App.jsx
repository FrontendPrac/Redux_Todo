import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";

function App() {
    return (
        // components 생성, todos state 전송
        <Layout>
            <Header />
            <Form />
            <List />
            <Footer />
        </Layout>
    );
}

export default App;
