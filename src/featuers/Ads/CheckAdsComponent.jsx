import Loader from "../../ui/Loader";
import Card from "./Card";
import CardContainer from "./CardContainer";
import useGetNotConfrimedAds from "./useGetNotConfrimedAds";

function CheckAdsComponent() {
  const { notConfrimedAds, isLoadingNotConfrimed } = useGetNotConfrimedAds();

  if (isLoadingNotConfrimed) return <Loader />;
  if (!notConfrimedAds || notConfrimedAds.length === 0)
    return <h1>There is no ad to confirm</h1>;

  return (
    <CardContainer>
      {notConfrimedAds?.map((ad) => (
        <Card ad={ad} key={ad.id} />
      ))}
    </CardContainer>
  );
}

export default CheckAdsComponent;
