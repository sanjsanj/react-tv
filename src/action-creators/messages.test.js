import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('../data');

import { getMessages } from '../data';
import { loadMessages } from './messages';
import { MESSAGES_LOADED } from './action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadMessages', () => {
  const mockMessage = {
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    timestamp: '2017-02-09T04:27:38Z',
  };

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
