import React, { useContext } from "react";
import jwtDecode from "jwt-decode";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

import { NotificationContext } from "../../providers/notification.provider";

import { APP_DEF } from "../../constants/appConfig";

import { StyledHeader } from "./style";

/**
 * Header component
 */
const Header: React.FC = () => {
  const { formatMessage: t } = useIntl();
  const token = localStorage.getItem(APP_DEF.tokenKey);
  const decoded: any = jwtDecode(token || "");
  const emailUser = decoded.email.split("@")[0];
  /** History hook */
  const { push } = useHistory();

  /** Context hook */
  const { addNotification } = useContext(NotificationContext);

  /** Logout user and clean the local storage */
  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    addNotification({ message: t({ id: "loggedOut" }), type: "success" });
    push("/");
    localStorage.clear();
  };

  return (
    <StyledHeader>
      <span>{t({ id: "welcomeMessage" }, { email: emailUser })}</span>
      <button onClick={handleLogout}>
        <MdOutlineLogout size={24} />
      </button>
    </StyledHeader>
  );
};

Header.displayName = "Header";

export default Header;
