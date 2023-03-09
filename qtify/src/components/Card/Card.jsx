import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

function Card() {
  return (
    <div>
      <div className={styles.image}>
        <img src={require("../../assets/songImage.png")}></img>
      </div>
      <div className={styles.button}>
        <button>100 Follows </button>
      </div>
    </div>
  );
}

export default Card;
