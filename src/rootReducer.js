import { combineReducers } from 'redux';
import { login } from './modules/signIn/signInReducer';

/* Unite all reducers */
const rootReducer = combineReducers({
  login,
});

export default (state, action) => {
  // if (action.type === pushLogout.TRIGGER) {
  //   state = undefined;
  // }

  return rootReducer(state, action);
};
