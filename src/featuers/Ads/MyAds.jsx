import Loader from "../../ui/Loader";
import Card from "./Card";
import useGetUserAds from "./useGetUserAds";

function MyAds() {
  const { userAds, loadingUserAds } = useGetUserAds();
  if (loadingUserAds) return <Loader />;
  return (
    <>
      {userAds?.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
      {!userAds && !loadingUserAds && <h2>You haven't placed any ads yet.</h2>}
    </>
  );
}

export default MyAds;
