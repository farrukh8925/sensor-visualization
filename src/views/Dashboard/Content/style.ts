import styled from "styled-components";

export const StyledContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.layout.paddingLarge};
  box-sizing: border-box;
  height: 100%;
`;

export const HeadingDropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
