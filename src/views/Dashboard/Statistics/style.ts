import styled from "styled-components";

export const StyledStatistics = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${(props) => props.theme.backgroundColorLight};
  width: 100%;
  box-sizing: border-box;
`;

export const StyledStatisticsCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.layout.paddingLarge};
  border-left: 1px solid ${(props) => props.theme.backgroundColorLight};
  border-bottom: 1px solid ${(props) => props.theme.backgroundColorLight};
`;
