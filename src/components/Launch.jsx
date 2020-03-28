import React, { Component } from 'react';

class Launch extends Component {

  onLaunchClicked = () => {
    const { onLaunchClicked, launch } = this.props;
    onLaunchClicked(launch)
  }

  renderRocketDetails = () => {
    // Rocket ID, Cost Per Launch, and Description
    const { rocket } = this.props

    return (
      <div className="launch-details">
        <div>Rocket Name: { rocket.rocket_name }</div>
        <div>Rocket Id: { rocket.rocket_id}</div>
        <div>Details: { rocket.description }</div>
        <div>Cost per launch: { rocket.cost_per_launch}</div>
      </div>
    )
  }

  render() {
    const { launch, isOpen, rocket } = this.props
    const showRocketDetails = rocket && isOpen

    return (
      <li onClick={this.onLaunchClicked}>
        <h2> { launch.mission_name } rocket: { launch.rocket.rocket_name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
        { showRocketDetails && this.renderRocketDetails() }
      </li>
    );
  }
}

export default Launch;
