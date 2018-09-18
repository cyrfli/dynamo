import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { alertActions } from "Actions";

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  render() {
    const { alert } = this.props;
    if (!isEmpty(alert)) {
      return (
        <div
          className={`has-text-centered is-shadowed notification ${alert.type}`}
        >
          <button type="button" className="delete" onClick={this.handleClose} />
          {alert.message}
        </div>
      );
    }
    return null;
  }
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  const { alert } = state;
  return { alert };
};

const connectedAlert = connect(mapStateToProps)(Alert);
export { connectedAlert as Alert };
