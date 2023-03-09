import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.container_banner}>
      <p className={styles.banner_text}>
        100 Thousand songs, ad free <br /> Over thousand podcast episodes.
      </p>
      <img
        className={styles.headphones}
        src={require("../../assets/headphones.png")}
      ></img>
    </div>
  );
}

export default Banner;
