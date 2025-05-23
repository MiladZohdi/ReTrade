import { Outlet } from "react-router";
import CardContainer from "../featuers/Ads/CardContainer";
import Heading from "../ui/Heading";
import SavedAdsComponent from "../featuers/Ads/SavedAdsComponent";

function SavedAds() {
  return (
    <>
      <Heading as="h2">Saved Ads</Heading>
      <SavedAdsComponent />
    </>
  );
}

export default SavedAds;
