import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "Helpers";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const { loggedIn } = this.props;
      if (!loggedIn) {
        history.push("/login");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    const { authentication } = state;
    return { loggedIn: authentication.loggedIn };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
