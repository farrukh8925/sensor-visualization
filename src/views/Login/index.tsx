import React from "react";
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

  /**
   * Process the form and login user
   */
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    push("/dashboard");
  };

  return (
    <StyledLoginContainer>
      <Card>
        <StyledLogo>
          <img src={Logo} alt="logo" />
        </StyledLogo>
        <span className="welcome-message">{t({ id: "welcome" })}</span>
        <StyledForm onSubmit={handleLogin}>
          <InputText label={t({ id: "email" })} />
          <InputText label={t({ id: "password" })} />
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
