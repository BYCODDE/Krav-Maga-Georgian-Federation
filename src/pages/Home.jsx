import HomePriceCard from "../components/Home/price-cards/HomePriceCard";
import FeedbackBox from "../components/Home/FeedbackBox";
import HeroImage from "../components/Home/HeroImage";
import PartnersBanner from "../components/Home/PartnersBanner";

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
