import { combineReducers } from 'redux';


/* Unite all reducers */
const rootReducer = combineReducers({

});

export default (state, action) => {
  // if (action.type === pushLogout.TRIGGER) {
  //   state = undefined;
  // }

  return rootReducer(state, action);
};
