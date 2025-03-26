import styled from "styled-components";

const StyledLogo = styled.img`
  src: "../public/Logo.png";
  height: 10rem;
  width: 10rem;
`;

function Logo() {
  return <StyledLogo src="/Logo.png" />;
}

export default Logo;
