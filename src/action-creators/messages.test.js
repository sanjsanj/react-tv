import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getMessages } from '../data';
import { loadMessages } from './messages';
import { MESSAGES_LOADED } from './action-types';
import { messagesPayload } from '../utils/test-helpers';

jest.mock('../data');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadMessages', () => {
  const mockMessage = messagesPayload[0];

  beforeAll(() => {
    getMessages.mockImplementation(() => Promise.resolve(mockMessage));
  });

  it('creates MESSAGES_LOADED action when message loading succeeds', () => {
    const store = mockStore();

    const expected = [{ payload: mockMessage, type: MESSAGES_LOADED }];

    return store.dispatch(loadMessages()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
