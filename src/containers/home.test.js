import React from 'react';
import { shallow } from 'enzyme';

import { messagesPayload, membersPayload } from '../utils/test-helpers';

import Home from './home';

describe('Home', () => {
  let tree;
  let messageList;

  beforeAll(() => {
    const props = {
      messages: messagesPayload,
      members: membersPayload,
      loadMessages: jest.fn(),
      loadMembers: jest.fn(),
    };

    tree = shallow(<Home.WrappedComponent {...props} />);
    messageList = tree.find('Message');
  });

  it('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should display 2 messages', () => {
    expect(messageList.length).toEqual(2);
  });
});
