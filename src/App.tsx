import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { IntlProvider } from "react-intl";

// Views
import LoginView from "./views/Login";
import DashboardView from "./views/Dashboard";
import NotificationProvider from "./providers/notification.provider";

// Translations
import en from "./i18/en.json";

// Styles
import { AppTheme } from "./styles/theme";

/**
 * Create browser history
 */
const browserHistory = createBrowserHistory();

/**
 * Application root component
 */
const App: React.FC = () => {
  return (
    <div className="application">
      <IntlProvider messages={en} locale="en">
        <ThemeProvider theme={AppTheme}>
          <NotificationProvider>
            <Router history={browserHistory}>
              <Switch>
                <Route path="/" exact component={LoginView} />
                <Route path="/dashboard" component={DashboardView} />
              </Switch>
            </Router>
          </NotificationProvider>
        </ThemeProvider>
      </IntlProvider>
    </div>
  );
};

export default App;
