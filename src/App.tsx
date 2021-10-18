import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { IntlProvider } from "react-intl";

// Views
import DashboardView from "./views/Dashboard";
import NotificationProvider from "./providers/notification.provider";
import SensorDataProvider from "./providers/sensordata.provider";
import AppDataProvider from "./providers/appdata.provider";

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
            <AppDataProvider>
              <SensorDataProvider>
                <Router history={browserHistory}>
                  <Switch>
                    <Route path="/" component={DashboardView} />
                  </Switch>
                </Router>
              </SensorDataProvider>
            </AppDataProvider>
          </NotificationProvider>
        </ThemeProvider>
      </IntlProvider>
    </div>
  );
};

export default App;
