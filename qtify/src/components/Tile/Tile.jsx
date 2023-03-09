import React from "react";
import Card from "../Card/Card";
import styles from "./Tile.module.css";

function Tile({ tileName, imgSrc }) {
  return (
    <div className={styles.tile}>
      <div className={styles.card}>
        <Card imgSrc={imgSrc} title="100 Follows" />
      </div>
      <h4 className={styles.text}>{tileName}</h4>
    </div>
  );
}

export default Tile;
