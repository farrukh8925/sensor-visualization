import styled from "styled-components";

/** Wrapper */
export const StyledTimeRange = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & h1 {
    margin-bottom: 0px;
    margin-top: 0px;
  }

  & button {
    background: transparent;
    border: 0px;
    cursor: pointer;
  }

  & button:first-child {
    margin-right: ${(props) => props.theme.layout.margin};
  }

  & button:last-child {
    margin-left: ${(props) => props.theme.layout.margin};
  }
`;
