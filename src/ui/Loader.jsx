import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderDiv = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid var(--color-primary);
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  position: relative;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid var(--color-primary);
    border-bottom: 4px solid transparent;
    animation: ${rotation} 0.5s linear infinite reverse;
    top: 0;
    left: 0;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = (props) => {
  return (
    <Center>
      <LoaderDiv {...props} />
    </Center>
  );
};

export default Loader;
