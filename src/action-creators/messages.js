import { getMessages } from '../data';
import { MESSAGES_LOADED } from './action-types';

export const loadMessages = () => dispatch =>
  getMessages().then(data =>
    dispatch({
      type: MESSAGES_LOADED,
      payload: data,
    })
  );
