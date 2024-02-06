"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const photos = [
  "1.1.jpg",
  "1.2.jpg",
  "1.3.jpg",
  "2.2.jpg",
  "2.3.jpg",
  "3.1.jpg",
  "3.2.jpg",
  "3.3.jpg",
  "3.4.jpg",
];

const Swiper1 = () => {
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
      {photos.map((photo) => (
        <div className="" key={photo}>
          {" "}
          <SwiperSlide>
            <Image
              className="mx-auto"
              src={`/poze/${photo}`}
              height={1000}
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
