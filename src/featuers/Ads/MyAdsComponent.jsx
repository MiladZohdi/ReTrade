import Loader from "../../ui/Loader";
import Card from "./Card";
import CardContainer from "./CardContainer";
import useGetUserAds from "./useGetUserAds";

function MyAdsComponent() {
  const { userAds, loadingUserAds } = useGetUserAds();
  if (loadingUserAds) return <Loader />;
  return (
    <CardContainer>
      {userAds?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
      {!userAds && !loadingUserAds && <h2>You haven't placed any ads yet.</h2>}
    </CardContainer>
  );
}

export default MyAdsComponent;
