import React from "react";

import { StyledButton, StyledInputButton } from "./style";

type ButtonProps = {
  type: "submit" | "button";
  presentation: "primary" | "secondary";
  text: string;
  onClick?: () => void;
  onSubmit?: React.FormEventHandler<HTMLInputElement> | undefined;
};

/**
 * Simple button component
 */
const Button: React.FC<ButtonProps> = ({
  type,
  presentation,
  text,
  onClick,
}) => {
  /**
   * Render the correct type of interface
   */
  const render = () => {
    if (type === "submit") {
      return <StyledInputButton type="submit" value={text} />;
    }

    return (
      <StyledButton onClick={onClick} presentation={presentation}>
        {text}
      </StyledButton>
    );
  };

  return render();
};

Button.displayName = "Button";

export default Button;
