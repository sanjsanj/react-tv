import React from 'react';
import { shallow } from 'enzyme';

import { messagesPayload, membersPayload } from '../utils/test-helpers';

import Message from './Message';

describe('Message', () => {
  let tree;

  beforeAll(() => {
    const props = {
      data: messagesPayload[0],
      user: membersPayload[0],
    };

    tree = shallow(<Message {...props} />);
  });

  it('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should display message text', () => {
    const actualText = tree.find('.message').text();

    const expectedText = messagesPayload[0].message;

    expect(expectedText).toEqual(actualText);
  });

  it('should display user email when mousing over message', () => {
    const message = tree.find('.message');
    message.simulate('mouseenter');
    const userEmail = tree.find('.email');

    expect(userEmail.prop('style')).toHaveProperty('visibility', 'visible');
  });

  it('should not display user email when mouse leaves message', () => {
    const message = tree.find('.message');
    message.simulate('mouseleave');
    const userEmail = tree.find('.email');

    expect(userEmail.prop('style')).toHaveProperty('visibility', 'hidden');
  });

  it('should display the user avatar next to the message', () => {
    const userAvatar = tree.find('.avatar');

    expect(userAvatar.exists()).toEqual(true);
  });

  it('should display the message timestamp', () => {
    const timestamp = tree.find('.timestamp');
    const expectedTimestamp = new Date(messagesPayload[0].timestamp).toGMTString();

    expect(timestamp.text()).toEqual(expectedTimestamp);
  });
});
