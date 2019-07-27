import React from 'react';
import { shallow } from 'enzyme';

import { messagesPayload, membersPayload } from '../utils/test-helpers';

import Home from './home';

describe('Home', () => {
  let messageList;
  let props;
  let tree;

  beforeAll(() => {
    props = {
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

  it('should sort messages by time descending', () => {
    const unorderedMessageProps = {
      messages: [messagesPayload[1], messagesPayload[0]],
      members: membersPayload,
      loadMessages: jest.fn(),
      loadMembers: jest.fn(),
    };

    tree = shallow(<Home.WrappedComponent {...unorderedMessageProps} />);

    const newestMessageData = tree.childAt(0).prop('data');

    expect(newestMessageData).toEqual(messagesPayload[0]);
  });
});
