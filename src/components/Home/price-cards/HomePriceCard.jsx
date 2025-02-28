import { useGetHomePriceCards } from "../../../hooks/useGetHomePriceCards";
import ErrorDisplay from "../../ErrorDisplay";
import PriceCardsContent from "./PriceCardsContent";
import { PriceCardsContentSkeleton } from "./PriceCardsSkeleton";
function HomePriceCard() {
  const { data, isError, isLoading, error } = useGetHomePriceCards();
  console.log(data);
  if (isLoading) {
    return <PriceCardsContentSkeleton />;
  }
  if (isError) {
    return <ErrorDisplay ErrorMsg={error.message} />;
  }

  return (
    <div className="bg-[#161616] px-5 pt-10">
      <h1 className="text-white font-bold  text-2xl">Avaliable Classes</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 min-h-[70vh]">
        {data.map((card) => (
          <PriceCardsContent
            key={card.id}
            description={card.description.en}
            instructor={card.instructor.en}
            location={card.location.en}
            img={card.img}
            main_title={card.main_title.en}
            timing={card.timing.en}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePriceCard;
