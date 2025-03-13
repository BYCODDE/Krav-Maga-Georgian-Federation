import React, { useContext } from "react";
import { useGetAboutKravmaga } from "../../hooks/useGetAboutKravmaga";
import { LanguageContext } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import GalleryKravmaga from "./GalleryKravmaga";
import VideoKrav from "./VideoKrav";
import Sketetons from "./Sketetons";
import ErrorDisplay from "../ErrorDisplay";
export default function KravmagaAbout() {
  const { language } = useContext(LanguageContext);
  const { data, isLoading, isError, error } = useGetAboutKravmaga();

  if (isLoading) return <div className="text-center text-white py-10"><Sketetons/></div>;
  if (isError) return <div className="text-center text-red-500 py-10"><ErrorDisplay/></div>;

  return (
    <div className="bg-[#161616] px-6 py-12">
      {data.map((section) => (
        <motion.div
          key={section.id}
          className=" mx-auto space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-[#ececec] font-bold text-3xl">
                {section.title_krav[language]}
              </h1>
              <p className="mt-4 text-[16px] text-[#bfbfbf] leading-relaxed">
                {section.about_krav[language]}
              </p>
            </div>
            <motion.img
              className="md:w-1/2 w-full rounded-lg shadow-lg min-h-[450px]"
              src={section.img_historycal}
              alt=""
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-[#ececec] font-bold text-3xl">
              {section.title_federation[language]}
            </h1>
            <p className="mt-4 text-[16px] text-[#bfbfbf] leading-relaxed">
              {section.about_federation[language]}
            </p>
          </div>
        </motion.div>
      ))}
      <GalleryKravmaga data={data} />
      <VideoKrav />
    </div>
  );
}