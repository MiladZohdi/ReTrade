import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";
import Card from "./Card";
import CardContainer from "./CardContainer";
import useGetSavedAds from "./useGetSavedAds";

function SavedAdsComponent() {
  const { savedAds, loadingSavedAds } = useGetSavedAds();

  if (loadingSavedAds) return <Loader />;
  if (!savedAds?.data?.length) return <h1 as="h2">No saved ads found</h1>;

  return (
    <CardContainer>
      {savedAds?.data?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </CardContainer>
  );
}

export default SavedAdsComponent;
