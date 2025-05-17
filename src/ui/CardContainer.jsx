import styled from "styled-components";
import Card from "./Card";
import { useLocation } from "react-router";
import Loader from "./Loader";

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
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
      <Card kind={kind} />
    </StyledCardContainer>
  );
}

export default CardContainer;
