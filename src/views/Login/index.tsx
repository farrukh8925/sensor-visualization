import React, { ChangeEventHandler, useContext } from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";

// Other components
import Card from "../../components/Card";
import InputText from "../../components/InputText";
import Button from "../../components/Button";

// Images
import Logo from "../../assets/logo.svg";

// Import styles
import { StyledLoginContainer, StyledLogo, StyledForm } from "./style";
import { loginSignup } from "../../utils/fetcher";
import { isTokenValid } from "../../utils/token";
import { NotificationContext } from "../../providers/notification.provider";
import { AxiosError } from "axios";

/**
 * Login page component
 * Displays:
 * - Username/email input field
 * - Password input field
 * - Registeration button
 * - Login Button
 */
const LoginView: React.FC = () => {
  // Internationalization hook
  const { formatMessage: t } = useIntl();
  // React router hook
  const { push } = useHistory();
  // Local state management
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const notificationContext = useContext(NotificationContext);

  /**
   * Hook to re direct to dashboard page if token exists
   * For rationale, we are setting token expiry as 1 hour
   */
  React.useEffect(() => {
    if (isTokenValid()) {
      push("/dashboard");
    }
  }, [push]);

  /**
   * Handle input change (email)
   */
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setEmail(event.target.value);

  /**
   * Handle input change (password)
   */
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setPassword(event.target.value);

  /**
   * Process the form and login user
   */
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginSignup(email, password, "login")
      .then(() => {
        push("/dashboard");
        notificationContext.addNotification({
          message: t({ id: "loginSuccess" }),
          type: "success",
        });
      })
      .catch((error: AxiosError) => {
        notificationContext.addNotification({
          message: t({ id: "login401" }),
          type: "error",
        });
      });
  };

  return (
    <StyledLoginContainer>
      <Card>
        <StyledLogo>
          <img src={Logo} alt="logo" />
        </StyledLogo>
        <span className="welcome-message">{t({ id: "welcome" })}</span>
        <StyledForm onSubmit={handleLogin}>
          <InputText
            label={t({ id: "email" })}
            inputType="email"
            onChange={handleEmailChange}
            value={email}
          />
          <InputText
            label={t({ id: "password" })}
            inputType="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button
            type="submit"
            presentation="primary"
            text={t({ id: "login" })}
          />
        </StyledForm>
        <Button
          type="button"
          presentation="secondary"
          text={t({ id: "register" })}
        />
      </Card>
    </StyledLoginContainer>
  );
};

LoginView.displayName = "LoginView";

export default LoginView;
