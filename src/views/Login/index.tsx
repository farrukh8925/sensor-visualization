import React from "react";

// Import styles
import { StyledLoginContainer } from "./style";

/**
 * Login page component
 * Displays:
 * - Username/email input field
 * - Password input field
 * - Registeration button
 * - Login Button
 */
const LoginView: React.FC = () => {
  return <StyledLoginContainer>Login page</StyledLoginContainer>;
};

LoginView.displayName = "LoginView";

export default LoginView;
