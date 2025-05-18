import styled from "styled-components";
import Button from "../ui/Button";
import { useGetUser } from "../featuers/Auth/useGetUser";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start !important;
  gap: 5rem;
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
`;

const StyledParagraph = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  max-width: 80rem;
`;

function WelcomePage() {
  const {
    user: {
      user: {
        user_metadata: { name },
      },
    },
  } = useGetUser();

  return (
    <StyledContainer>
      <StyledHeader>Welcome, {name}!</StyledHeader>
      <StyledParagraph>
        We're excited to offer you the opportunity to sell your pre-loved items
        at a fair price Or find great second-hand deals, saving you money on new
        purchases.
      </StyledParagraph>
      <Button variations="sub">Place your Ad</Button>
    </StyledContainer>
  );
}

export default WelcomePage;
