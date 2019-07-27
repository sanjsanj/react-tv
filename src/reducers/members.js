import { MEMBERS_LOADED } from '../action-creators/action-types';

export const membersInitialState = [];

export default (state = membersInitialState, action) => {
  switch (action.type) {
    case MEMBERS_LOADED:
      return action.payload;

    default:
      return state;
  }
};
