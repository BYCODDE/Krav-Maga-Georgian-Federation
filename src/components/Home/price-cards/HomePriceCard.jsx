import { useContext } from "react";
import { useGetHomePriceCards } from "../../../hooks/useGetHomePriceCards";
import ErrorDisplay from "../../ErrorDisplay";
import PriceCardsContent from "./PriceCardsContent";
import { PriceCardsContentSkeleton } from "./PriceCardsSkeleton";
import { LanguageContext } from "../../../contexts/LanguageContext";

function HomePriceCard() {
  const { data, isError, isLoading, error } = useGetHomePriceCards();
  const { language } = useContext(LanguageContext);

  if (isLoading) {
    return <PriceCardsContentSkeleton />;
  }
  if (isError) {
    return <ErrorDisplay ErrorMsg={error.message} />;
  }

  return (
    <div className="bg-[#161616] px-5 pt-10">
      <h1 className="text-white font-bold text-2xl">
        {language === "ru"
          ? "Доступные классы"
          : language === "ka"
          ? "ხელმისაწვდომი კლასები"
          : "Available Classes"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 min-h-[55vh] justify-items-center place-items-center">
        {data.map((card) => (
          <PriceCardsContent
            key={card.id}
            description={card.description[language]}
            instructor={card.instructor[language]}
            location={card.location[language]}
            img={card.img}
            main_title={card.main_title[language]}
            timing={card.timing[language]}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePriceCard;
