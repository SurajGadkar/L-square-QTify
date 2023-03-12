import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
// Import Swiper styles
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css";

function Carousel({ data, renderComponent }) {
  return (
    <div style={{ position: "relative" }} className={styles.carousel__body}>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <CarouselLeftNavigation />
        {data.map((ele) => (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
}

export default Carousel;
