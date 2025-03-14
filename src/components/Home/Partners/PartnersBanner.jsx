import React, { useContext } from "react";
import { useGetPartners } from "../../../hooks/useGetPartners";
import ErrorDisplay from "../../ErrorDisplay";
import { LanguageContext } from "../../../contexts/LanguageContext";
import PartnersBannerSkeleton from "./PartnersBannerSkeleton";

function PartnersBanner() {
  const { data, isLoading, isError, error } = useGetPartners();

  const { language } = useContext(LanguageContext);
  if (isLoading) return <PartnersBannerSkeleton />;
  if (isError) return <ErrorDisplay ErrorMsg={error.message} />;

  return (
    <div className="w-full h-auto py-12 flex items-center justify-center px-4 bg-[#A9A9A9]">
      <div className="flex flex-col items-center space-y-4">
        {data.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
              <img
                src={partner.img}
                alt={partner.img}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {partner.name[language]}
              </h3>
              <p className="text-gray-600 text-md">
                {partner.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersBanner;
