/**
 * Type definition for application notifications
 */
export type AppNotification = {
  message: string;
  type: "error" | "warning" | "success";
};

export type NotificationContextState = {
  addNotification: (notification: AppNotification) => void;
};
