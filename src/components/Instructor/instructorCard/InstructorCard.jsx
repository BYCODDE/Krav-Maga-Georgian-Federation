import React, { useContext } from "react";
import { useGetInstructorCards } from "../../../hooks/useGetInstructorInfo";
import SkeletonInsturctor from "../instructorCard/SkeletonInsturctor";
import ErrorDisplay from "../../ErrorDisplay";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

export default function InstructorCard() {
  const { data, isLoading, isError, error } = useGetInstructorCards();
    const { language } = useContext(LanguageContext);
const {t} = useTranslation();

  if (isLoading) {
    return <SkeletonInsturctor />;
  }

  if (isError) {
    return <ErrorDisplay ErrorMsg={error.message} />;
  }

  return (
    <div className="flex flex-col bg-[#161616]">
      <h1 className="text-white font-bold text-center py-[20px] text-2xl">
        {t("instructor_header", { defaultValue: "Our Instructor" })}
      </h1>
      <div className="flex justify-center px-[20px] py-[50px]">
        <div className="w-72 p-6 bg-[#383838] rounded-xl shadow-lg text-white">
          <img
            src={data[0].img}
            alt="Instructor"
            className="w-32 h-32 mx-auto rounded-full object-cover object-top"
          />
          <h2 className="mt-3 text-lg text-center font-semibold">
            {data[0].about_instructor[language]}
          </h2>
          <h2 className="text-[15px] font-bold text-center">
            {data[0].name[language]}
          </h2>
          {data.map((instructor, index) => {
            return (
              <div key={index} className="mt-2 text-gray-300">
                <p>{instructor.award_fifth[language]}</p>
                <p>{instructor.award_second[language]}</p>
                <p>{instructor.award_third[language]}</p>
                <p>{instructor.award_fourth[language]}</p>
                <p>{instructor.award_fifth[language]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
