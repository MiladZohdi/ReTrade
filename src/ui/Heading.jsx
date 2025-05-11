import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
    `}
`;

export default Heading;
