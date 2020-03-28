import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';

configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    shallow(<Routes />);
  });
});
