import React from "react";
import Layout from "../components/layout/Layout"
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Footer from "../components/footer/Footer"

const Home = () => {
  return(
        <Layout>
            <Header />
            <Form />
            <List />
            <Footer />
        </Layout>)
};

export default Home;
