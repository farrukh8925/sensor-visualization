import styled from "styled-components";

/**
 * Notification wrapper
 */
export const StyledNotificationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  padding: ${(props) =>
    `${props.theme.layout.padding} ${props.theme.layout.paddingLarge}`};
  box-sizing: border-box;
  color: white;
  font-weight: bold;
  font-size: 16px;

  &.success {
    background-color: ${(props) => props.theme.colorSuccess};
  }

  &.error {
    background-color: ${(props) => props.theme.colorError};
  }
`;
