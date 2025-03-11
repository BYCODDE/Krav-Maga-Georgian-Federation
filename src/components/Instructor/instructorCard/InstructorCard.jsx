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

  if (isLoading) return <SkeletonInsturctor />;
  if (isError) return <ErrorDisplay ErrorMsg={error.message} />;

  return (
    <div className="bg-[#161616] px-6 py-12">
      <h1 className="text-white font-bold text-center text-3xl mb-10">
        {t("instructor_header", { defaultValue: "Our Instructors" })}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((instructor, index) => (
          <motion.div
            key={index}
            className="bg-[#383838] p-6 rounded-xl shadow-lg text-white text-center transform transition-all hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Fixed delay calculation
          >
            <img
              src={instructor.img}
              alt="Instructor"
              className="w-32 h-32 mx-auto rounded-full object-cover object-top border-2 border-gray-400"
            />
            <h2 className="mt-4 text-xl font-semibold">{instructor.name[language]}</h2>
            <p className="mt-2 text-sm text-gray-300">{instructor.about_instructor[language]}</p>

            <div className="mt-4 text-[14px] text-gray-400 space-y-1">
              <p>{instructor.award_first[language]}</p>
              <p>{instructor.award_second[language]}</p>
              <p>{instructor.award_third[language]}</p>
              <p>{instructor.award_fourth[language]}</p>
              <p>{instructor.award_fifth[language]}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
