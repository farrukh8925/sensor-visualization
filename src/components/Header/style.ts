import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  padding: ${(props) => props.theme.layout.padding};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.backgroundColorLight};
  button {
    background: transparent;
    border: 0px;
    border-radius: 60px;
    transition: all 0.2s ease-out;
    padding: 4px 6px;
    display: flex;
    align-items: center;
    height: 32px;
    width: 32px;
    margin-left: ${(props) => props.theme.layout.marginLarge};

    &:hover {
      background-color: ${(props) => props.theme.colorAccent};
      cursor: pointer;
      color: white;
    }
  }

  & span {
    font-weight: 500;
    color: ${(props) => props.theme.headingColor};
  }
`;
