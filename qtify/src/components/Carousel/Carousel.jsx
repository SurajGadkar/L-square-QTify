import React from "react";
import Tile from "../Tile/Tile";

import styles from "./Carousel.module.css";

function Carousel({ album }) {
  return (
    <div className={styles.main__container}>
      <h4 className={styles.album__name}>{album}</h4>
      <div className={styles.carousel__container}>
        <div className="col-lg-4">
          <Tile tileName="New Bollywood" />
        </div>
        <div className="col-lg-4">
          <Tile tileName="New English Songs" />
        </div>
        <div className="col-lg-4">
          <Tile tileName="New English Songs" />
        </div>
        <div className="col-lg-4">
          <Tile tileName="New English Songs" />
        </div>
        <div className="col-lg-4">
          <Tile tileName="New English Songs" />
        </div>
        <div className="col-lg-4">
          <Tile tileName="New English Songs" />
        </div>
        <div className="col-lg-4">
          <Tile tileName="New English Songs" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
