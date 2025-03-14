import React from "react";
import { useGetHeroImage } from "../../../hooks/useGetHeroImage";
import { useTranslation } from "react-i18next";
import HeroImageSkeleton from "./HeroImageSkeleton";
import ErrorDisplay from "../../ErrorDisplay";

const HeroImage = () => {
  const { data, error, isError, isLoading } = useGetHeroImage();
  const { t } = useTranslation();

  if (isLoading) return <HeroImageSkeleton />;
  if (isError) return <ErrorDisplay ErrorMsg={error.message}></ErrorDisplay>;

  return (
    <div
      className="relative min-h-[calc(100vh-133px)] w-full bg-cover bg-center"
      style={{ backgroundImage: `url("${data[0].img}")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-[32px] md:text-6xl font-bold">
          {t("hero_cover", {
            defaultValue: "Enhance your skills and master Krav Maga techniques",
          })}
        </h1>
      </div>
    </div>
  );
};

export default HeroImage;
