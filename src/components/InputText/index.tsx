import React, { ChangeEventHandler } from "react";
import { StyledInputContainer } from "./style";

type InputTextProps = {
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  inputType: "text" | "password" | "email";
  value?: string;
};

/**
 * Custom input text component.
 */
const InputText: React.FC<InputTextProps> = ({
  label,
  onChange: handleInputChange,
  inputType,
  value,
}) => {
  return (
    <StyledInputContainer>
      {label && <label>{label}</label>}
      <input
        type={inputType}
        onChange={handleInputChange}
        value={value}
      ></input>
    </StyledInputContainer>
  );
};

InputText.displayName = "InputText";
export default InputText;
