import styled from "styled-components";

export const StyledSidebar = styled.aside`
  width: 64px;
  background-color: ${(props) => props.theme.colorAccent};
  height: 100%;
  padding: ${(props) => props.theme.layout.padding};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & button {
    background-color: transparent;
    border: 0px;
    font-size: 26px;
    color: rgba(255, 255, 255, 0.3);
    padding: 0px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: ${(props) => props.theme.layout.margin};
    transition: 0.2s all ease-out;

    &:hover {
      color: white;
    }
  }
`;
