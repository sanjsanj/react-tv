import { MESSAGES_LOADED } from '../action-creators/action-types';

export const messagesInitialState = [];

export default (state = messagesInitialState, action) => {
  switch (action.type) {
    case MESSAGES_LOADED:
      return action.payload;

    default:
      return state;
  }
};
