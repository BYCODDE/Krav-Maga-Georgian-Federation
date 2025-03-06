import React from "react";
import { useGetInstructorCards } from "../../../hooks/useGetInstructorInfo";
import SkeletonInsturctor from "../instructorCard/SkeletonInsturctor";
import ErrorDisplay from "../../ErrorDisplay";
export default function InstructorCard() {
  const { data, isLoading, isError, error } = useGetInstructorCards();
  console.log(data);

  if (isLoading) {
    return <SkeletonInsturctor />;
  }
  if (isError) {
    return <ErrorDisplay ErrorMsg={error.message} />;
  }

  return (
    <div className="flex flex-col bg-[#161616]">
      <h1 className="text-white font-bold text-center py-[20px] text-2xl">
        Meet Our Instructors
      </h1>
      <div className="flex flex-wrap gap-6 px-[20px] py-[50px]">
        {data?.map((item, index) => (
          <div
            key={index}
            className="w-72 p-6 bg-[#383838] rounded-xl shadow-lg text-white"
          >
            <img
              src={item.img}
              alt="Instructor"
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h2 className="mt-3 text-lg text-center font-semibold">
              {item.about_instructor.en}
            </h2>
            <h2 className="text-xl font-bold text-center">{item.name.en}</h2>

            <div className="mt-2 text-gray-300">
              <p>{item.award_fifth.en}</p>
              <p>{item.award_second.en}</p>
              <p>{item.award_third.en}</p>
              <p>{item.award_fourth.en}</p>
              <p>{item.award_fifth.en}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
