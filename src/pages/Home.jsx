import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import Lists from "../components/list/Lists";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <Lists isActive={false} />
      <Lists isActive={true} />
      <Footer />
    </Layout>
  );
};

export default Home;
