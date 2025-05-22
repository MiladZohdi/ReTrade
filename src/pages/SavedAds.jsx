import { Outlet } from "react-router";
import CardContainer from "../featuers/Ads/CardContainer";
import Heading from "../ui/Heading";

function SavedAds() {
  return (
    <>
      <Heading as="h2">Saved Ads</Heading>
      <CardContainer />
      <Outlet />
    </>
  );
}

export default SavedAds;
