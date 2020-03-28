import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Launch from "../components/Launch";

configure({ adapter: new Adapter() });

const launch = {
  flight_number: 1,
  rocket: {
    rocket_name: "Falcon 11",
    rocket_id: "falcon11",
    description: "This is Falcon 11 description",
    cost_per_launch: "6700000"
  }
};

const rocket = {
  rocket_name: "Falcon 11",
  rocket_id: "falcon11",
  description: "This is Falcon 11 description",
  cost_per_launch: "6700000"
};

describe('Launch', () => {
  it('calls onLaunchClicked when user clicks Launch item', () => {
    const wrapper = mount(
      <Launch {...{
        key: launch.flight_number,
        launch,
        onLaunchClicked: jest.fn(),
        rocket
      }} />
    );

    expect(wrapper.props().rocket.rocket_name).toBe("Falcon 11");
    wrapper.find("li").simulate("click");
    expect(wrapper.props().onLaunchClicked).toBeCalled();
  });

  describe('launch details', () => {
    it('renders when isOpen and has rocketData', () => {
      const wrapper = mount(
        <Launch {...{
          key: launch.flight_number,
          launch,
          onLaunchClicked: jest.fn(),
          rocket,
          isOpen: true
        }} />
      );
  
      expect(wrapper.find(".launch-details").length).toBe(1);
    });

    it('does not render when not isOpen', () => {
      const wrapper = mount(
        <Launch {...{
          key: launch.flight_number,
          launch,
          onLaunchClicked: jest.fn(),
          rocket,
          isOpen: false
        }} />
      );
  
      expect(wrapper.find(".launch-details").length).toBe(0);
    });

    it('does not render when no rocketData', () => {
      const wrapper = mount(
        <Launch {...{
          key: launch.flight_number,
          launch,
          onLaunchClicked: jest.fn(),
          rocket: null,
          isOpen: true
        }} />
      );
  
      expect(wrapper.find(".launch-details").length).toBe(0);
    });
  });
});