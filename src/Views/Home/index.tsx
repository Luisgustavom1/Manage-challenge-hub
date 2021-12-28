import React from "react";
import AboutUs from "../../Components/AboutUs";
import CallActionSection from "../../Components/CallActionSection";
import Depositions from "../../Components/Depositions";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Introduction from "../../Components/Introduction";

function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <AboutUs />
      <Depositions />
      <CallActionSection />
      <Footer />
    </>
  );
}

export default Home;
