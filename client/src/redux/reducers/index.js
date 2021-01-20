import { combineReducers } from 'redux';
import authorization from './authorization';
import channels from './channels';

const createRootReducer = () =>
  combineReducers({
    authorization,
    channels,
  });

export default createRootReducer;
