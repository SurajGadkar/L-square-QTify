import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section.jsx";
import axios from "axios";
import { fetchTopSongs } from "./components/api/api.js";

function App() {
  const [album1, setAlbum1] = useState([]);
  const [album2, setAlbum2] = useState([]);
  /*
  const getContent = async (url, setMethod) => {
    try {
      const response = await axios.get(url);
      setMethod(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(album1);

  useEffect(() => {
    getContent("https://qtify-backend-labs.crio.do/albums/top", setAlbum1);
    getContent("https://qtify-backend-labs.crio.do/albums/new", setAlbum2);
  }, []);
 */

  useEffect(() => {});
  return (
    <>
      <Navbar />
      <Banner />
      <Section title={"Top Albums"} dataSource={fetchTopSongs} />
    </>
  );
}

export default App;
