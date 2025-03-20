import styled, { css } from "styled-components";

const direction = {
  vertical: css`
    flex-direction: row;
  `,
  horizontal: css`
    flex-direction: column;
  `,
};

const Row = styled.div`
  display: flex;
  ${(props) => direction[props.direction]}
  align-items: center;
  justify-content: space-between;
`;

Row.defaultProps = {
  direction: "vertical",
};

export default Row;
