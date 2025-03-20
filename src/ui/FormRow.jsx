import styled from "styled-components";

const Row = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

Row.defaultProps = {
  direction: "vertical",
};

export default Row;
