import React from "react";
import { StyledInputContainer } from "./style";

type InputTextProps = {
  label?: string;
};

/**
 * Custom input text component.
 */
const InputText: React.FC<InputTextProps> = ({ label }) => {
  return (
    <StyledInputContainer>
      {label && <label>{label}</label>}
      <input type="text"></input>
    </StyledInputContainer>
  );
};

InputText.displayName = "InputText";
export default InputText;
