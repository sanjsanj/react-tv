import React from 'react';
import { shallow } from 'enzyme';

import { messagesPayload } from '../utils/test-helpers';

import Home from './home';

describe('Home', () => {
  let tree;

  beforeAll(() => {
    const props = {
      messages: messagesPayload,
      loadMessages: jest.fn(),
      loadMembers: jest.fn(),
    };

    tree = shallow(<Home.WrappedComponent {...props} />);
  });

  it('should mount', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should display 2 mocked messages', () => {
    const messageList = tree.find('li');

    expect(messageList.length).toEqual(2);
  });
});
