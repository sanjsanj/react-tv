import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  let tree;

  beforeAll(() => {
    tree = shallow(<App />);
  });

  it('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should display Home component', () => {
    const home = tree.find('Connect(Home)');

    expect(home.exists()).toEqual(true);
  });
});
