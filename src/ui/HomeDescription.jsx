import styled from "styled-components";

const StyledHomeDescription = styled.p`
  font-size: 3rem;
  line-height: 1.5;
  font-weight: 400;
  max-width: 80rem;
`;

function HomeDescription() {
  return (
    <StyledHomeDescription>
      Welcome to ReTreade, your destination for buying and selling pre-loved
      items at fair prices. Declutter and earn, or shop sustainably for unique
      treasures. Start your second-hand adventure today!
    </StyledHomeDescription>
  );
}

export default HomeDescription;
