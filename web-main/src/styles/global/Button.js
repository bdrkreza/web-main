import styled, { css } from "styled-components";

const StyledButton = styled.a`
  width: 228px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:hover {
    transition: 0.5s all ease-in-out;
    background-color: #000;
    color: white;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: #ea6431;
      color: white;
    `}
`;

export { StyledButton };
