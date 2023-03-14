import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section.jsx";
import FilterSection from "./components/FilterSection/FilterSection.jsx";
import { fetchTopSongs, fetchNewAlbums } from "./components/api/api.js";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Section title={"Top Albums"} dataSource={fetchTopSongs} />
      <Section title={"New Albums"} dataSource={fetchNewAlbums} />
      <FilterSection />
    </>
  );
}

export default App;
