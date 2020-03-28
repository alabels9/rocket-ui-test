import React, { Component } from 'react';

class Launch extends Component {
  onLaunchClicked = () => {
    const { onLaunchClicked, launch } = this.props;
    onLaunchClicked(launch);
  }

  renderRocketDetails = () => {
    const { rocket } = this.props;

    return (
      <div className="launch-details">
        <div><span className="label">Rocket Name:</span> { rocket.rocket_name }</div>
        <div><span className="label">Rocket Id:</span> { rocket.rocket_id}</div>
        <div><span className="label">Details:</span> { rocket.description }</div>
        <div><span className="label">Cost Per Launch:</span> ${ rocket.cost_per_launch.toLocaleString()}</div>
      </div>
    );
  }

  render() {
    const { launch, isOpen, rocket } = this.props;
    const showRocketDetails = rocket && isOpen;

    return (
      <li onClick={this.onLaunchClicked}>
        <h2> { launch.mission_name }</h2>
        { showRocketDetails && this.renderRocketDetails() }
      </li>
    );
  }
}

export default Launch;
