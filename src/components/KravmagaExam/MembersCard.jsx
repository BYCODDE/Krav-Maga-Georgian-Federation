import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import Navigation module styles
import "swiper/css/pagination"; // Import Pagination module styles
import { LanguageContext } from "../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ErrorDisplay from "../ErrorDisplay";
import SkeletonInstructor from "../Instructor/SkeletonInsturctor";
import { useGetkravmagaExam } from "../../hooks/useGetkravmagaExam";

export default function MembersCard() {
  const { data, isLoading, isError, error } = useGetkravmagaExam();
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  if (isLoading) return <SkeletonInstructor />;
  if (isError) return <ErrorDisplay ErrorMsg={error.message} />;

  return (
    <div className="flex flex-col bg-[#161616]">
      <motion.h1
        className="text-white font-bold text-center py-[20px] text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("exam_results_header", { defaultValue: "Exam Results" })}
      </motion.h1>

      <p className="text-gray-300 text-center px-6 py-4">
        {t("exam_description", {
          defaultValue:
            "On March 20, 2025, the first Krav Maga exam was held across Georgia to award technical qualifications, with participation from members of the Federation and dignitaries.",
        })}
      </p>

      <div className="px-[20px] py-[50px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((member) => (
            <SwiperSlide key={member.id}>
              <motion.div
                className="flex flex-col items-center bg-[#222222] p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={member.person_img}
                  alt={member.name[language]}
                  className="w-[200px] h-[300px] object-cover object-top rounded-lg mb-4"
                />

                <h2 className="text-[22px] font-semibold text-white text-center mb-2">
                  {member.name[language]}
                </h2>

                <div className="text-gray-400 text-center text-[18px]">
                  <p>
                    {t("person_code", { defaultValue: "Person Code" })}:
                    {" "}
                    {member.person_code}
                  </p>
                  <p>
                    {member.level[language]}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
