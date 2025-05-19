import styled from "styled-components";

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

export default ImageInput;
