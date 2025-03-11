
import { useGetFeedback } from "../../hooks/useGetFeetback";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function FeedbackBox() {
  const { data, isLoading, isError, error } = useGetFeedback();
  console.log(data, "esaa");

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">{error.message}</p>;

  return (
    <div className="p-6 md:p-10 bg-[#A9A9A9]">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">
        Join the Krav Maga Community
      </h2>
      <p className="text-center text-base md:text-lg text-gray-600 mb-8 md:mb-10">
        Connect with passionate practitioners worldwide
      </p>

      <div className="relative overflow-hidden">
        <Swiper
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {data.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="flex-shrink-0 w-full min-h-[200px] border border-gray-300 p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <div className="mb-4 flex items-start gap-4">
                  <img src="/comma.png" alt="" className="w-6 h-6" />
                </div>
                <div className="flex items-start gap-4 ">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                      src={feedback.profile_image}
                      alt={feedback.user_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {feedback.user_name.en}
                    </h3>
                    <p className="text-gray-500 text-sm overflow-y-auto max-h-20 break-words">
                      {feedback.review.en}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
