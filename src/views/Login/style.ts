import styled from "styled-components";

/**
 * Default container for login view
 */
export const StyledLoginContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColorLight};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  width: 100%;

  & .welcome-message {
    font-size: 16px;
    max-width: 450px;
    text-align: center;
    display: inline-block;
    margin-bottom: ${(props) => props.theme.layout.margin};
  }
`;

/**
 * Logo Container
 */
export const StyledLogo = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  & img {
    height: 32px;
  }
`;

export const StyledForm = styled.form`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  juistify-content: center;

  & > * {
    margin-bottom: ${(props) => props.theme.layout.margin};
  }
`;
