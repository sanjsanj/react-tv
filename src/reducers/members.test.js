import members, { membersInitialState } from './members';
import { MEMBERS_LOADED } from '../action-creators/action-types';
import { membersPayload } from '../utils/test-helpers';

describe('members reducer', () => {
  it('should return membersInitialState when no action caught', () => {
    expect(members(undefined, {})).toEqual(membersInitialState);
  });

  it('should set members on members loaded', () => {
    expect(
      members([], {
        type: MEMBERS_LOADED,
        payload: membersPayload,
      })
    ).toEqual(membersPayload);
  });
});
