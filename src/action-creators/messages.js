import { MESSAGES_LOADED } from './action-types';
import { getMessages } from '../data';

export const loadMessages = () => dispatch =>
  getMessages().then(data =>
    dispatch({
      type: MESSAGES_LOADED,
      payload: data,
    })
  );
