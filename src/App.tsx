import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import MainFooter from "./layouts/MainFooter";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="flex flex-col max-w-layout mx-auto px-3 md:px-0">
        <Outlet />
      </div>
      <>
        <MainFooter />
        <Footer />
      </>
    </React.Fragment>
  );
}

export default App;
