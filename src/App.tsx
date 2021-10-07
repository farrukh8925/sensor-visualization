import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";

// Styles
import { AppTheme } from "./styles/theme";
import LoginView from "./views/Login";

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
      <ThemeProvider theme={AppTheme}>
        <Router history={browserHistory}>
          <Switch>
            <Route path="/" exact component={LoginView} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
