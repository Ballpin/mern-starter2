/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';

import RootRoute from '../RootRoute';

describe.skip('<RootRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<RootRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
