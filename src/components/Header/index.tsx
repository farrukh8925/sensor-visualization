import React from "react";
import jwtDecode from "jwt-decode";
import { useIntl } from "react-intl";
import { MdOutlineLogout } from "react-icons/md";

import { StyledHeader } from "./style";
import { APP_DEF } from "../../constants/appConfig";

/**
 * Header component
 */
const Header: React.FC = () => {
  const { formatMessage: t } = useIntl();
  const token = localStorage.getItem(APP_DEF.tokenKey);
  const decoded: any = jwtDecode(token || "");
  const emailUser = decoded.email.split("@")[0];

  return (
    <StyledHeader>
      <span>{t({ id: "welcomeMessage" }, { email: emailUser })}</span>
      <button>
        <MdOutlineLogout size={24} />
      </button>
    </StyledHeader>
  );
};

Header.displayName = "Header";

export default Header;
