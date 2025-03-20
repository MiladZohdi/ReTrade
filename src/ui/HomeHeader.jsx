import styled from "styled-components";

const StyledHomeHeader = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: 0.2rem;
`;

function HomeHeader() {
  return (
    <StyledHomeHeader>
      ReTreade: Fair Trade, Second-Hand Treasure
    </StyledHomeHeader>
  );
}

export default HomeHeader;
