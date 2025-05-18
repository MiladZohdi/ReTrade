import styled from "styled-components";
import { useLocation } from "react-router";
import AllAds from "./AllAds";
import MyAds from "./MyAds";
import SavedAds from "./SavedAds";

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  row-gap: 2rem;
  grid-auto-rows: max-content;
`;

function CardContainer() {
  const path = useLocation();
  const kind = path.pathname;

  return (
    <StyledCardContainer>
      {kind === "/app/my-ads" && <MyAds />}
      {kind === "/app/ads" && <AllAds />}
      {kind === "/app/saved-ads" && <SavedAds />}
    </StyledCardContainer>
  );
}

export default CardContainer;
