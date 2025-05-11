import styled from "styled-components";
import InputRow from "./InputRow";
import Button from "./Button";
import ImageInput from "./ImageInput";
import { BiImageAlt } from "react-icons/bi";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
`;

const StyledAdFromContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`;

const ImageContainer = styled.div`
  align-self: center;
  justify-self: center;
  padding-right: 10rem;

  & svg {
    height: 20rem;
    width: 20rem;
    color: var(--color-primary-dark);
  }
`;

function AdForm() {
  return (
    <StyledAdFromContainer>
      <form>
        <StyledFormRow>
          <InputRow name="title" title="Title">
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Used iPhone 15 pro"
            />
          </InputRow>

          <InputRow name="price" title="Price">
            <input
              type="number"
              id="price"
              name="price"
              required
              placeholder="1000"
            />
          </InputRow>

          <InputRow name="contactInfo" title="Contact Info">
            <input
              type="contactInfo"
              id="contactInfo"
              name="contactInfo"
              required
              placeholder="07123456789"
            />
          </InputRow>

          <InputRow name="description" title="Description">
            <textarea
              type="text"
              id="description"
              name="description"
              required
              placeholder="iPhone 15 which is used for 1 year ..."
            />
          </InputRow>

          <InputRow name="image" title="Select image">
            <ImageInput name="image" title="Upload image" />
          </InputRow>

          <Button variations="sub">Place Your ad</Button>
        </StyledFormRow>
      </form>

      <ImageContainer>
        <BiImageAlt />
      </ImageContainer>
    </StyledAdFromContainer>
  );
}

export default AdForm;
