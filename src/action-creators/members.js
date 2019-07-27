import { MEMBERS_LOADED } from './action-types';
import { getMembers } from '../data';

export const loadMembers = () => dispatch =>
  getMembers().then(data =>
    dispatch({
      type: MEMBERS_LOADED,
      payload: data,
    })
  );
