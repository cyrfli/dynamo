import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { history } from "Helpers";
import { alertActions } from "Actions";
import { PrivateRoute } from "Containers/PrivateRoute";

import { TimelinePage } from "Containers/TimelinePage";
import { ProjectPage } from "Containers/ProjectPage";
import HomePage from "Containers/HomePage";
import { RegistrationPage } from "Containers/RegistrationPage";
import { AuthenticationPage } from "Containers/AuthenticationPage";
import NotFoundPage from "Containers/NotFoundPage";
import { Header } from "Containers/Header";
import Footer from "Containers/Footer";

import Wrapper from "./Wrapper";
import Alert from "./Alert";

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
    const { alert } = this.props;
    return (
      <Router history={history}>
        <Wrapper>
          <Header />
          {alert.message && (
            <Alert className={`alert ${alert.type}`}>{alert.message}</Alert>
          )}
          <Switch>
            <Route path="/" component={HomePage} exact />
            <PrivateRoute path="/home" component={TimelinePage} exact />
            <PrivateRoute path="/project" component={ProjectPage} exact />
            <Route path="/register" component={RegistrationPage} exact />
            <Route path="/login" component={AuthenticationPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  alert: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  const { alert } = state;
  return { alert };
};

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
