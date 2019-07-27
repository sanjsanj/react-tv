import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import messages from './messages';
import members from './members';

export default history =>
  combineReducers({
    router: connectRouter(history),
    messages,
    members,
  });
