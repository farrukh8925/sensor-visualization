import React, { useState, createContext } from "react";
import {
  AppNotification,
  NotificationContextState,
} from "../types/notification.context.state";
import { StyledNotificationWrapper } from "./style";

/**
 * Type for default context state
 */
const contextDefault: NotificationContextState = {
  addNotification: (notification: AppNotification) => {},
};

/**
 * Create context and return it
 */
export const NotificationContext = createContext(contextDefault);

/**
 * Create the provider
 */
const NotificationProvider: React.FC = ({ children }) => {
  /**
   * State Management
   */
  const [notification, setNotification] = useState<AppNotification | undefined>(
    undefined
  );

  /**
   * Method to add notification
   */
  const handleAddNotification = (notification: AppNotification) => {
    setNotification(notification);
  };

  /**
   * Use effect method to clear out notification once the are populated
   */
  React.useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification(undefined);
      }, 5000);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider
      value={{ addNotification: handleAddNotification }}
    >
      {notification && (
        <StyledNotificationWrapper className={`${notification?.type}`}>
          {notification.message}
        </StyledNotificationWrapper>
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
