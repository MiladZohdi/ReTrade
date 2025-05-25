import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  row-gap: 2rem;
  grid-auto-rows: max-content;
`;

export default CardContainer;
