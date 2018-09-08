import React from "react";
import { connect } from "react-redux";

import "./styles.scss";

// eslint-disable-next-line react/prefer-stateless-function
class Timeline extends React.Component {
  render() {
    return (
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Your feed</h1>
        <ul className="list-unstyled">
          <li className="media">
            <img className="mr-3" src=".../64x64" alt="Generic placeholder" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li className="media my-4">
            <img className="mr-3" src=".../64x64" alt="Generic placeholder" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li className="media">
            <img className="mr-3" src=".../64x64" alt="Generic placeholder" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
        </ul>
      </main>
    );
  }
}

const connectedTimelinePage = connect()(Timeline);
export { connectedTimelinePage as TimelinePage };
