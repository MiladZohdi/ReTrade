import Loader from "../../ui/Loader";
import Card from "./Card";
import useGetAds from "./useGetAds";
function AllAds() {
  const { ads, adsLoading } = useGetAds();
  if (adsLoading) return <Loader />;
  return (
    <>
      {ads?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </>
  );
}

export default AllAds;
