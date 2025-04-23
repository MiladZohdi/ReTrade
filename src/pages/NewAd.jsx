// import { Form } from "react-hook-form";
import styled from "styled-components";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { HiMiniArrowUpTray } from "react-icons/hi2";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  & label {
    font-size: 1.8rem;
    font-weight: 400;
  }

  & input {
    width: 35rem;
    height: 4rem;
  }

  & input,
  & textarea {
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid var(--color-black);
    border-radius: 4px;

    background-color: #e8edef;
    &::placeholder {
      color: #a2b7c0;
    }
  }

  & textarea {
    font-family: inherit;
    width: 35rem;
    height: 10rem;
    resize: none;
    background-color: #e8edef;
    &::placeholder {
      color: #a2b7c0;
    }
  }
`;

const ImageInput = styled.div`
  & input {
    opacity: 0;
    width: 0.01rem;
    height: 0.01rem;
  }

  & label {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--color-primary);
    padding: 1rem 2rem;
    color: var(--color-white);
    border-radius: 0.5rem;

    &:hover {
      cursor: pointer;
    }

    & svg {
      height: 2rem;
      width: 2rem;
    }
  }
`;

function NewAd() {
  return (
    <>
      <h1>Create New Ad</h1>
      <form>
        <StyledFormRow>
          <InputRow>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Used iPhone 15 pro"
            />
          </InputRow>

          <InputRow>
            <label htmlFor="price">price:</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              placeholder="1000"
            />
          </InputRow>

          <InputRow>
            <label htmlFor="contactInfo">contactInfo:</label>
            <input
              type="contactInfo"
              id="contactInfo"
              name="contactInfo"
              required
              placeholder="07123456789"
            />
          </InputRow>

          <InputRow>
            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              id="description"
              name="description"
              required
              placeholder="iPhone 15 which is used for 1 year ..."
            />
          </InputRow>

          <InputRow>
            <label htmlFor="image">Upload an image:</label>
            <ImageInput>
              <label htmlFor="image">
                <span>Select image</span>
                <HiMiniArrowUpTray />
              </label>
              <input
                type="file"
                id="image"
                name="image"
                required
                placeholder="Upload image"
              />
            </ImageInput>
          </InputRow>

          <Button variations="medium">Place Your ad</Button>
        </StyledFormRow>

        <image></image>
      </form>
    </>
  );
}

export default NewAd;
