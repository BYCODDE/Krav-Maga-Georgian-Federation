import React from "react";
import { useGetHeroImage } from "../../hooks/useGetHeroImage";
import { useTranslation } from "react-i18next";

const HeroImage = () => {
  const { data, error, isError, isLoading } = useGetHeroImage();
  const {t} = useTranslation();

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div
      className="relative min-h-[calc(100vh-133px)] w-full bg-cover bg-center"
      style={{ backgroundImage: `url("${data[0].img}")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t("hero_cover", {
            defaultValue: "Enhance your skills and master Krav Maga techniques",
          })}
        </h1>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroImage;