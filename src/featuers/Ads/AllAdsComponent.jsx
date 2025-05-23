import Loader from "../../ui/Loader";
import Card from "./Card";
import CardContainer from "./CardContainer";
import useGetAds from "./useGetAds";
function AllAdsComponent() {
  const { ads, adsLoading } = useGetAds();
  if (adsLoading) return <Loader />;
  return (
    <CardContainer>
      {ads?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </CardContainer>
  );
}

export default AllAdsComponent;
