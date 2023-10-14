import { ReactNode } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ disabled, children, onClick }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
