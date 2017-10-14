/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';

import { Post } from '../Post';

const FakePost = {
  title: 'Test',
  body: 'Test this post',
};

describe('<Post />', () => {
  test('renders header', () => {
    const wrapper = shallow(<Post post={FakePost} />);
    expect(wrapper.find('h1').length).toBe(1);
  });
  test('renders the snapshot', () => {
    const wrapper = shallow(<Post post={FakePost} />);
    expect(wrapper).toMatchSnapshot();
  });
});
