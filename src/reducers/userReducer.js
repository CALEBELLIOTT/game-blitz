// @ts-nocheck
import { LOGIN_ASYNC, SET_USER } from "../actions/types";
import { setLoginError, setUserData } from "../selectors/users";

const initialState = {
  user: {},
};

const noop = type => () => {
  console.error(`no reducer for type ${type}`);
}
export const userReducer = (state = initialState, { type, payload, error }) => ({
  [SET_USER]: () => setUserData(state, payload),
  [LOGIN_ASYNC.ERROR]: () => setLoginError(state, payload),
  [LOGIN_ASYNC.SUCCESS]: () => setLoginError(state, {})
}[type] || noop(type))() || state;
