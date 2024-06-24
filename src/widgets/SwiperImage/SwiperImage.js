import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "antd";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";

const SwiperImage = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      navigation
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
          <Image
            style={{
              // width: "15vw",
              height: "35vh",
            }}
            src={image || image.thumbUrl}
            alt={`Slide ${index}`}
          
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImage;
