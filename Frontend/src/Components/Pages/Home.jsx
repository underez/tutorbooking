import React, { useEffect } from "react";
import Banner from "../Banner";
import Categories from "../Categories";
import TwoBlock from "../TwoBlock";
import Counter from "../Counter";
import Footer from "../Footer";
import Header from "../Header";


const Home = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <TwoBlock />
      <Counter />
      <Footer />
    </>
  );
};

export default Home;
