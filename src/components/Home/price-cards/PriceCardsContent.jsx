import { useTranslation } from "react-i18next";

function PriceCardsContent({
  main_title,
  description,
  timing,
  location,
  instructor,
  price,
  img,
  setIsModalOpen,
  isModalOpen,
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-[#A9A9A9] w-full h-fit max-w-[400px] min-h-[400px] p-4 rounded-3xl my-5 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
      <div>
        <img
          src={img}
          alt="img"
          className="h-[150px] w-full rounded-3xl bg-no-repeat object-cover object-top"
        />
      </div>
      <div className="text-white flex flex-col gap-2 pt-2">
        <h1 className="font-bold">{main_title}</h1>
        <p className="text-xs">{description}</p>
        <h3 className="text-xs">
          {t("Time")}: {timing}
        </h3>
        <h3 className="text-xs">
          {t("Location")}: {location}
        </h3>
        <h3 className="text-xs">
          {t("Instructor")}: {instructor}
        </h3>
      </div>
      <div className="pt-3 flex items-center justify-between gap-3 ">
        <button
          onClick={() => setIsModalOpen(() => !isModalOpen)}
          className="bg-white text-black py-2 px-3 rounded-2xl text-xs transition-all duration-300 hover:bg-gray-200"
        >
          Sign up
        </button>
        <h2 className="text-white font-bold">{price} GEL</h2>
      </div>
    </div>
  );
}

export default PriceCardsContent;
