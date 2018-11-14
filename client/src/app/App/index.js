import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { history } from "../../helpers";
import { alertActions } from "../../alert/duck";

import Timeline from "../../timeline/Timeline";
import Dynamo from "../../projects/Dynamo";
import Projects from "../../projects/Projects";
import ProjectCreate from "../../projects/ProjectCreate";
import Home from "../../home/Home";
import Registration from "../../users/Registration";
import Authentication from "../../users/Authentication";
import LogoutPage from "../../users/Logout";
import NotFoundPage from "../../error/NotFound";
import Header from "../Header";
import Footer from "../Footer";
import Alert from "../../alert/Alert";

import requireAuth from "../../users/requireAuth";

import Main from "./Main";
import Wrapper from "./Wrapper";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { clear } = this.props;
    history.listen(() => {
      // clear alert on location change
      clear();
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
              <Route path="/" component={Home} exact />
              <Route path="/timeline" component={requireAuth(Timeline)} exact />
              <Route
                path="/projects/new"
                component={requireAuth(ProjectCreate)}
                exact
              />
              <Route path="/projects" component={requireAuth(Projects)} exact />
              <Route path="/dynamo" component={requireAuth(Dynamo)} exact />
              <Route path="/register" component={Registration} exact />
              <Route path="/login" component={Authentication} exact />
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
  clear: PropTypes.func
};

const connectedApp = connect(
  null,
  { clear: alertActions.clear }
)(App);
export { connectedApp as App };
