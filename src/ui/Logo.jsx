import styled from "styled-components";

const StyledLogo = styled.img`
  src: "../public/Logo.png";
  height: 9rem;
  width: 9rem;
`;

function Logo() {
  return <StyledLogo src="/Logo.png" />;
}

export default Logo;
