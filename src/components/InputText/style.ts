import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
    color: ${(props) => props.theme.textColorLabel};
    font-size: ${(props) => props.theme.fontSizes.fontSizeLabel};
    font-family: Merriweather;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: ${(props) => props.theme.layout.margin};
  }

  & input {
    height: ${(props) => props.theme.layout.inputHeight};
    border: ${(props) => `2px solid ${props.theme.inputBorderColor}`};
    border-radius: ${(props) => props.theme.layout.borderRadius};
    box-sizing: border-box;
    margin-bottom: ${(props) => props.theme.layout.marginLarge};
  }
`;
