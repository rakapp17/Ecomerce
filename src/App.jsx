import React from "react";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Secondnav from "./Components/Secondnav";
import Card from "./Components/Card";
import ProductList from "./Components/Product";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="container w-[90%] m-auto">
        <Nav />
        <Landing />
        <Secondnav />
        <ProductList />
        <div className="w-full h-[1px] bg-slate-300 mt-6"> 
        </div>
        <Hero />
        <div className="w-full h-[2px] bg-slate-200 mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
