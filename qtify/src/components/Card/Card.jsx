import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

function Card() {
  return (
    <div>
      <div className={styles.image}>
        <img src={require("../../assets/songImage.png")} alt="Song Images" />
      </div>
      <div className={styles.button_area}>
        <button className={styles.btn}> 100 Follows </button>
      </div>
    </div>
  );
}

export default Card;
