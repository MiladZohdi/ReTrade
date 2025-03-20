import styled from "styled-components";

const StyledLogo = styled.img`
  src: "../public/Logo.png";
`;

function Logo() {
  return <StyledLogo src="/Logo.png" />;
}

export default Logo;
