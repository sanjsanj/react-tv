import React from 'react';
import { shallow } from 'enzyme';

import { messagesPayload } from '../utils/test-helpers';

import Message from './Message';

describe('Message', () => {
  let tree;

  beforeAll(() => {
    const props = {
      data: messagesPayload[0],
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

  it('should not display user email when not hovering over message', () => {
    const userEmail = tree.find('.email');

    expect(userEmail.prop('style')).toHaveProperty('visibility', 'hidden');
  });
});
