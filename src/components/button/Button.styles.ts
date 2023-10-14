import styled from "styled-components";

type StyledButtonProps = {
  disabled: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.disabled ? "red" : "blue")};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
