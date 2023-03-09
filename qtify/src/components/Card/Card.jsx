import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

function Card({ imgSrc, title }) {
  return (
    <div>
      <div className={styles.image}>
        <img src={require("../../assets/songImage.png")} alt="Song Images" />
      </div>
      <div className={styles.button_area}>
        <Button className={styles.btn} title={title} />
      </div>
    </div>
  );
}

export default Card;
