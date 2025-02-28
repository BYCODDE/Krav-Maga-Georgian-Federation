import React from "react";
import { useGetHeroImage } from "../../hooks/useGetHeroImage";

const HeroImage = () => {
  const {data,error,isError,isLoading} = useGetHeroImage()
  
  if(isLoading) return <p>Loading</p>
  if(isError) return <p>{error.message}</p>

  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url("${data[0].img}")` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Enhance your skills and master Krav Maga techniques
        </h1>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
