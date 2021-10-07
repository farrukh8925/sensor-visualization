import styled, { css, ThemeProps } from "styled-components";
import { AppTheme } from "../../types/theme.type";

type ButtonProps = {
  presentation?: "primary" | "secondary";
};

const DEFAULT_BUTTON = css`
  border-radius: ${(props) => props.theme.layout.borderRadius};
  border: 0px;
  cursor: pointer;
  font-family: Montserrat, Sans-Serif;
  font-size: 16px;
  font-weight: bold;
  height: ${(props) => props.theme.layout.inputHeight};
  text-transform: uppercase;
  transition: 0.2s all ease-out;
  width: 100%;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${DEFAULT_BUTTON};
  ${(props: ButtonProps & ThemeProps<AppTheme>) => {
    if (props.presentation === "primary") {
      return css`
        background-color: ${(props) => props.theme.buttonColorPrimary};
        color: ${(props) => props.theme.buttonTextColorPrimary};
      `;
    }
    return css`
      background-color: ${(props) => props.theme.colorAccent};
      color: ${(props) => props.theme.colorAccentFont};
    `;
  }}
`;

export const StyledInputButton = styled.input.attrs({ type: "submit" })`
  background-color: ${(props) => props.theme.buttonColorPrimary};
  color: ${(props) => props.theme.buttonTextColorPrimary};
  ${DEFAULT_BUTTON};

  &:hover {
    background-color: ${(props) => props.theme.buttonPrimaryHover};
  }
`;
