import styled from "styled-components";

export const StyledSidebar = styled.aside`
  width: 64px;
  background-color: ${(props) => props.theme.colorAccent};
  height: 100%;
  padding: ${(props) => props.theme.layout.padding};
  box-sizing: border-box;
`;
