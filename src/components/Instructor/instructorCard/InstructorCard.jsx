import React, { useContext } from "react";
import { useGetInstructorCards } from "../../../hooks/useGetInstructorInfo";
import SkeletonInsturctor from "../instructorCard/SkeletonInsturctor";
import ErrorDisplay from "../../ErrorDisplay";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function InstructorCard() {
  const { data, isLoading, isError, error } = useGetInstructorCards();
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  if (isLoading) {
    return <SkeletonInsturctor />;
  }

  if (isError) {
    return <ErrorDisplay ErrorMsg={error.message} />;
  }

  return (
    <div className="flex flex-col bg-[#161616]">
      <motion.h1
        className="text-white font-bold text-center py-[20px] text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("instructor_header", { defaultValue: "Our Instructor" })}
      </motion.h1>

      <div className="px-[20px] py-[50px] flex flex-col md:flex-row">
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={data[0].img}
            alt="Instructor"
            className="w-[300px] h-[400px] object-cover object-top"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 pl-[20px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-3 text-lg font-semibold text-gray-300">
            {data[0].about_instructor[language]}
          </h2>
          <h2 className="text-[15px] font-bold text-gray-300">
            {data[0].name[language]}
          </h2>

          <div className="mt-2 text-gray-300">
            {data.map((instructor) => (
              <motion.div
                key={instructor.name[language]}
                className="flex flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p>{instructor.award_first[language]}</p>
                <p>{instructor.award_second[language]}</p>
                <p>{instructor.award_third[language]}</p>
                <p>{instructor.award_fourth[language]}</p>
                <p>{instructor.award_fifth[language]}</p>
                <p>{instructor.award_six[language]}</p>
                <p>{instructor.award_seventh[language]}</p>
                <p>{instructor.award_eighth[language]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
