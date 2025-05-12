import styled from "styled-components";
import { BiImageAlt } from "react-icons/bi";
import Row from "./Row";
import { IoBookmark, IoCheckmarkCircleSharp } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";

const StyledCard = styled.div`
  height: 30rem;
  width: 25rem;
  background: var(--gradient-background-home);
  padding: 1.6rem;
  color: var(--color-white);
  text-overflow: ellipsis;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

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
  display: grid;
  grid-template-columns: 1fr 2rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;

  & svg {
    width: 2.2rem;
    height: auto;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

function Card({ kind }) {
  return (
    <StyledCard>
      <BiImageAlt />
      <CardContent>
        <Details>
          <h2>Card</h2>
          <h3>20$</h3>
          <p>Description</p>
        </Details>
        <IconBox>
          {kind === "/app/saved-ads" && <IoBookmark />}
          {kind === "/app/my-ads" && (
            <>
              <IoCheckmarkCircleSharp />
              <TbEdit />
            </>
          )}
          {kind === "/app/ads" && ""}
        </IconBox>
      </CardContent>
    </StyledCard>
  );
}

export default Card;
