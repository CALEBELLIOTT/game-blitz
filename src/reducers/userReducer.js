import { SET_LOGIN_ERROR, SET_USER } from "../actions/types";
import { setLoginError, setUserData } from "../selectors/users";

const initialState = {
  user: {},
};

const noop = type => () => {
  console.error(`no reducer for type ${type}`);
}
export const userReducer = (state = initialState, { type, payload, error }) => ({
  [SET_USER]: () => setUserData(state, payload),
  [SET_LOGIN_ERROR]: () => setLoginError(state, payload)
}[type] || noop(type))() || state;
