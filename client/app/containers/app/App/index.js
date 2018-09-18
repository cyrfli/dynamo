import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { history } from "Helpers";
import { alertActions } from "Actions";

import { TimelinePage } from "Containers/timeline/TimelinePage";
import { ProjectsPage } from "Containers/project/ProjectsPage";
import { ProjectPage } from "Containers/project/ProjectPage";
import { HomePage } from "Containers/home/HomePage";
import { RegistrationPage } from "Containers/auth/RegistrationPage";
import { AuthenticationPage } from "Containers/auth/AuthenticationPage";
import { LogoutPage } from "Containers/auth/LogoutPage";
import { NotFoundPage } from "Containers/error/NotFoundPage";
import { Header } from "Containers/app/Header";
import { Footer } from "Containers/app/Footer";
import { Alert } from "Containers/alert/Alert";

import requireAuth from "Containers/auth/requireAuth";

import Main from "./Main";
import Wrapper from "./Wrapper";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen(() => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    return (
      <Router history={history}>
        <Wrapper>
          <Header />
          <Main>
            <Alert />
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route
                path="/timeline"
                component={requireAuth(TimelinePage)}
                exact
              />
              <Route
                path="/projects"
                component={requireAuth(ProjectsPage)}
                exact
              />
              <Route
                path="/project"
                component={requireAuth(ProjectPage)}
                exact
              />
              <Route path="/register" component={RegistrationPage} exact />
              <Route path="/login" component={AuthenticationPage} exact />
              <Route path="/logout" component={LogoutPage} exact />
              <Route component={NotFoundPage} />
            </Switch>
          </Main>
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};

const connectedApp = connect()(App);
export { connectedApp as App };
