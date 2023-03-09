import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Carousel album="Top Albums" />
      <Carousel album="New Albums" />
    </>
  );
}

export default App;
