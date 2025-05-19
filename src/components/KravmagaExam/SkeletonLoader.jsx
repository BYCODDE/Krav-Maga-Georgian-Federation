import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SkeletonLoader = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <SwiperSlide key={index}>
          <div className="lg:h-[460px] flex flex-col items-center bg-[#222222] p-4 rounded-lg shadow-lg w-full max-w-[300px] mx-auto">
            {/* Skeleton Image */}
            <div className="w-[150px] h-[200px] md:w-[180px] md:h-[240px] lg:w-[200px] lg:h-[260px] bg-gray-400 animate-pulse mb-4 rounded-lg"></div>

            {/* Skeleton Name */}
            <div className="w-[120px] h-[20px] bg-gray-400 animate-pulse mb-2"></div>

            {/* Skeleton Person Code and Level */}
            <div className="w-[80px] h-[15px] bg-gray-400 animate-pulse mb-2"></div>
            <div className="w-[100px] h-[15px] bg-gray-400 animate-pulse mb-2"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkeletonLoader;
