import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import messages from './messages';

export default history =>
  combineReducers({
    router: connectRouter(history),
    messages,
  });
