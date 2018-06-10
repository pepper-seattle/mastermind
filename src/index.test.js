import React from 'react';
import index from './index';
import { shallow } from 'enzyme';

describe('A thing', () => {
  it('renders 1 component', () => {
    const component = shallow(<index />);
    expect(component).toHaveLength(1);
  })
});