import Loader from "../../ui/Loader";
import Card from "./Card";
import useGetSavedAds from "./useGetSavedAds";

function SavedAds() {
  const { savedAds, loadingSavedAds } = useGetSavedAds();
  if (loadingSavedAds) return <Loader />;
  return (
    <>
      {!savedAds && <h2>You haven't saved any ads yet.</h2>}
      {savedAds?.data?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </>
  );
}

export default SavedAds;
