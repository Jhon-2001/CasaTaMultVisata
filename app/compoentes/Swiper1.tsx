"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Key } from "react";


const Swiper1 = ({photos}:any) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {photos.map((photo: any) => (
        <div className="" key={photo}>
          {" "}
          <SwiperSlide>
            <Image
              className="mx-auto object-cover"
              src={`/${photo}`}
              height={500}
              width={1000}
              alt="home"
            />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Swiper1;
