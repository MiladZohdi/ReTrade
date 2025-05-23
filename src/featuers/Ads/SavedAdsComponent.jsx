import Loader from "../../ui/Loader";
import Card from "./Card";
import CardContainer from "./CardContainer";
import useGetSavedAds from "./useGetSavedAds";

function SavedAdsComponent() {
  const { savedAds, loadingSavedAds } = useGetSavedAds();

  if (loadingSavedAds) return <Loader />;
  return (
    <CardContainer>
      {!savedAds && <h2>You haven't saved any ads yet.</h2>}
      {savedAds?.data?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </CardContainer>
  );
}

export default SavedAdsComponent;
