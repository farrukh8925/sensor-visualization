import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.backgroundColorPrimary};
  padding: ${(props) => props.theme.layout.paddingLarge};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
`;
