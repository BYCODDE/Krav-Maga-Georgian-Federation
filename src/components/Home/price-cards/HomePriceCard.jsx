import { useState, useEffect } from "react";
import { useGetHomePriceCards } from "../../../hooks/useGetHomePriceCards";
import ErrorDisplay from "../../ErrorDisplay";
import PriceCardsContent from "./PriceCardsContent";
import { PriceCardsContentSkeleton } from "./PriceCardsSkeleton";
import ModalPortal from "../../ModalPortal";
import SignUpModal from "./SignUpModal";

function HomePriceCard() {
  const { data, isError, isLoading, error } = useGetHomePriceCards();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );

  useEffect(() => {
    const checkLanguageChange = () => {
      const newLanguage = localStorage.getItem("i18nextLng") || "en";
      if (newLanguage !== language) {
        setLanguage(newLanguage);
      }
    };

    const interval = setInterval(checkLanguageChange, 0);

    return () => clearInterval(interval);
  }, [language]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 min-h-[70vh]">
        {data.map((card) => (
          <PriceCardsContent
            key={card.id}
            description={card.description[language] || card.description.en}
            instructor={card.instructor[language] || card.instructor.en}
            location={card.location[language] || card.location.en}
            img={card.img}
            main_title={card.main_title[language] || card.main_title.en}
            timing={card.timing[language] || card.timing.en}
            price={card.price}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        ))}
      </div>
      {isModalOpen && (
        <ModalPortal>
          <SignUpModal setIsModalOpen={setIsModalOpen} />
        </ModalPortal>
      )}
    </div>
  );
}

export default HomePriceCard;
