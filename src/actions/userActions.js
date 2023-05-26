import { LOGIN, SET_LOGIN_ERROR, SET_USER } from "./types";

const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  }
}

const setLoginError = (payload) => {
  return {
    type: SET_LOGIN_ERROR,
    payload
  }
}
const login = (payload) => {
  return {
    type: LOGIN,
    payload
  }
}

export {
  setUser,
  setLoginError,
  login
}