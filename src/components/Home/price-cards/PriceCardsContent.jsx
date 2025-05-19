import { useTranslation } from "react-i18next";

function PriceCardsContent({
  main_title,
  description,
  timing,
  location,
  instructor,
  img,
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1C1C1C] w-full max-w-[400px] p-4 rounded-3xl my-3 xl:max-h-[450px] flex flex-col justify-between">
      <div>
        <img
          src={img}
          alt={main_title}
          className="h-[150px] w-full rounded-3xl bg-no-repeat object-cover object-top"
        />
      </div>
      <div className="text-white flex flex-col gap-2 pt-2">
        <h1 className="font-bold text-[#b87721]">{main_title}</h1>
        <p className="text-xs text-[#D3D3D3]">{description}</p>
        <h3 className="text-xs text-[#b53b3b]">
          {t("Time")}: {timing}
        </h3>
        <h3 className="text-xs text-[#b53b3b]">
          {t("Location")}: {location}
        </h3>
        <h3 className="text-xs text-[#b53b3b]">
          {t("Instructor")}: {instructor}
        </h3>
      </div>
      <div className="pt-3 flex items-center justify-between gap-3 mt-auto">
        <a href="tel:+995599557422" className="text-white">
          {t("Phone")} : (+995) 599-557-422
        </a>
      </div>
    </div>
  );
}

export default PriceCardsContent;
