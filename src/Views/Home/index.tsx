import React from "react";
import AboutUs from "../../Components/AboutUs";
import Depositions from "../../Components/Depositions";
import Header from "../../Components/Header";
import Introduction from "../../Components/Introduction";

function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <AboutUs />
      <Depositions />
    </>
  );
}

export default Home;
