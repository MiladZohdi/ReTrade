import Loader from "../../ui/Loader";
import Card from "./Card";
import CardContainer from "./CardContainer";
import useGetSavedAds from "./useGetSavedAds";

function SavedAdsComponent() {
  const { savedAds, loadingSavedAds } = useGetSavedAds();

  if (loadingSavedAds) return <Loader />;

  if (!savedAds || savedAds.data.length === 0)
    return <h1>You haven't saved any ads yet.</h1>;

  return (
    <CardContainer>
      {savedAds?.data?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </CardContainer>
  );
}

export default SavedAdsComponent;
