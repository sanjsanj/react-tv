import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getMembers } from '../data';
import { loadMembers } from './members';
import { MEMBERS_LOADED } from './action-types';
import { membersPayload } from '../utils/test-helpers';

jest.mock('../data');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadMembers', () => {
  const mockMember = membersPayload[0];

  beforeAll(() => {
    getMembers.mockImplementation(() => Promise.resolve(mockMember));
  });

  it('creates MEMBERS_LOADED action when members loading succeeds', () => {
    const store = mockStore();

    const expected = [{ payload: mockMember, type: MEMBERS_LOADED }];

    return store.dispatch(loadMembers()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
