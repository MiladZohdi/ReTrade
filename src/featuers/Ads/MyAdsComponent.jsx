import Loader from "../../ui/Loader";
import Card from "./Card";
import CardContainer from "./CardContainer";
import useGetUserAds from "./useGetUserAds";

function MyAdsComponent() {
  const { userAds, loadingUserAds } = useGetUserAds();
  if (loadingUserAds) return <Loader />;

  if (!userAds || userAds.length === 0)
    return <h1>You haven't saved any ads yet.</h1>;

  return (
    <CardContainer>
      {userAds?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </CardContainer>
  );
}

export default MyAdsComponent;
