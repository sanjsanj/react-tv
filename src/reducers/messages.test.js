import messages, { messagesInitialState } from './messages';
import { MESSAGES_LOADED } from '../action-creators/action-types';
import { messagesPayload } from '../utils/test-helpers';

describe('messages reducer', () => {
  it('should return messagesInitialState when no action caught', () => {
    expect(messages(undefined, {})).toEqual(messagesInitialState);
  });

  it('should set messages on messages loaded', () => {
    expect(
      messages([], {
        type: MESSAGES_LOADED,
        payload: messagesPayload,
      })
    ).toEqual(messagesPayload);
  });
});
