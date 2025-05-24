import styled from "styled-components";
import { BiImageAlt } from "react-icons/bi";
import Row from "../../ui/Row";
import { IoBookmark, IoCheckmarkCircleSharp } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { Link, useLocation } from "react-router";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const StyledCard = styled(Link)`
  height: 30rem;
  width: 25rem;
  background: var(--gradient-background-home);
  padding: 1.6rem;
  color: var(--color-white);
  text-overflow: ellipsis;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  text-decoration: none;

  & svg,
  & img {
    width: 80%;
    height: 60%;
    display: block;
    margin: 0 auto;
  }

  & img {
    border-radius: var(--border-radius-sm);
  }

  &:hover {
    cursor: pointer;
  }
`;

const CardContent = styled.div`
  margin-top: 2rem;
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

function Card({ ad }) {
  const path = useLocation();
  const kind = path.pathname;

  return (
    <StyledCard to={`/app/ad-details/${ad.id}`}>
      {ad?.image ? <img src={ad.image} /> : <BiImageAlt />}
      <CardContent>
        <Details>
          <h2>{ad.title}</h2>
          <h3>{ad.price}</h3>
          <p>{ad.description}</p>
        </Details>
        <IconBox>
          {kind === "/app/saved-ads" && <IoBookmark />}
          {kind === "/app/my-ads" && (
            <>
              {ad?.isConfirmed ? (
                <IoCheckmarkCircleSharp />
              ) : (
                <HiOutlineMagnifyingGlass />
              )}
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
