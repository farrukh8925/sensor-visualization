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

export const InformationRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.theme.layout.marginXl};
  & span {
    color: ${(props) => props.theme.textColorLabel};
  }
`;

export const StyledTable = styled.table`
  width: 100%;

  & th {
    text-align: start;
    background-color: ${(props) => props.theme.backgroundColorLight};
    height: 34px;
    padding: 0px ${(props) => props.theme.layout.padding};
    box-sizing: border-box;
    color: ${(props) => props.theme.headingColor};
    font-family: Merriweather, Sans-Serif;
  }

  & td {
    padding: 0px ${(props) => props.theme.layout.padding};
    height: 28px;
  }

  & tr:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.backgroundColorLight};
  }
`;
