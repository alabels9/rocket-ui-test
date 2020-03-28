import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import {fetchRocket} from "../actions/Rockets";
import Launch from '../components/Launch';

class LaunchesView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openedLaunch: 0
    }
  }

  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  onLaunchClicked = (launch) => {
    const { openedLaunch } = this.state
    if (openedLaunch.flight_number === launch.flight_number) {
      this.setState({ openedLaunch: 0 })
    } else {
      const { dispatch } = this.props;
      const rocketId = launch.rocket.rocket_id

      fetchRocket({ dispatch, rocketId }).then(data => {
        this.setState({ openedLaunch: launch.flight_number })
      })
      
    }
  }

  renderLaunches() {
    const { launchCollection, rocketData } = this.props;
    const { openedLaunch } = this.state

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];

    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];
      let rocket
      if (rocketData.rocket && rocketData.rocket.rocket_id === launch.rocket.rocket_id) {
        rocket = { ...rocketData.rocket }
      }

      launches.push(
        <Launch {...{
          key: launch.flight_number,
          launch,
          onLaunchClicked: this.onLaunchClicked,
          isOpen: openedLaunch === launch.flight_number,
          rocket
        }} />
      )
    }

    return <ul>{launches}</ul>;
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.renderLaunches()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
