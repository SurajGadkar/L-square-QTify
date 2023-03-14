import React from "react";
import styles from "./FilterSection.module.css";
import Section from "../Section/Section";
import { fetchNewAlbums } from "../api/api";
import MuiTabs from "../MuiTabs/MuiTabs";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function FilterSection() {
  return (
    <div className={styles.container__border}>
      <div className={styles.main__container}>
        <h3>Songs</h3>
        <div className={styles.filter__buttons}></div>
        <div>
          <MuiTabs />
          <Section tag={"filter"} dataSource={fetchNewAlbums} />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
