import styled from "styled-components";
import { BiImageAlt } from "react-icons/bi";
import Row from "./Row";
import { IoBookmark } from "react-icons/io5";

const StyledCard = styled.div`
  height: 30rem;
  width: 25rem;
  background: var(--gradient-background-home);
  padding: 1.6rem;
  color: var(--color-white);
  text-overflow: ellipsis;
  border-radius: 1rem;

  & svg {
    width: 80%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & h3 {
    flex: 1;
  }

  & svg {
    width: 2.2rem;
    height: auto;
  }
`;

function Card() {
  return (
    <StyledCard>
      <BiImageAlt />
      <CardContent>
        <StyledRow>
          <h3>Card</h3>
          <IoBookmark />
        </StyledRow>
        <h2>20$</h2>
        <p>Description</p>
      </CardContent>
    </StyledCard>
  );
}

export default Card;
