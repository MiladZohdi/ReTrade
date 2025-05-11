import styled from "styled-components";
import Card from "./Card";
import { useLocation } from "react-router";

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  row-gap: 2rem;
  grid-auto-rows: max-content;
`;

function CardContainer() {
  const path = useLocation();
  const saved = path.pathname === "/app/saved-ads";

  return (
    <StyledCardContainer>
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
      <Card saved={saved} />
    </StyledCardContainer>
  );
}

export default CardContainer;
