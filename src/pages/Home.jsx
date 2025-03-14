import HomePriceCard from "../components/Home/price-cards/HomePriceCard";
import FeedbackBox from "../components/Home/Feedback/FeedbackBox";
import HeroImage from "../components/Home/HeroImage/HeroImage";
import PartnersBanner from "../components/Home/Partners/PartnersBanner";

function Home() {
  return (
    <>
      <HeroImage />
      <HomePriceCard />
      <PartnersBanner />
      <FeedbackBox />
    </>
  );
}
export default Home;
