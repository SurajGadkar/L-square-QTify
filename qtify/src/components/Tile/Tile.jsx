import React from "react";
import Card from "../Card/Card";
import styles from "./Tile.module.css";

function Tile() {
  return (
    <div className={styles.tile}>
      <div className={styles.card}>
        <Card />
      </div>
      <h4 className={styles.text}>New Bollywood</h4>
    </div>
  );
}

export default Tile;
