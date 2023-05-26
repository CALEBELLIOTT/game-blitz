import { put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "../actions/types";
import {
  setUser,
  setLoginError,
} from '../actions/userActions'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export function* login({ payload }) {
  try {
    const { email, password } = payload || {}
    const res = yield signInWithEmailAndPassword(auth, email, password)
    const { user } = res || {}
    yield put(setUser(user))
    yield put(setLoginError({ error: false }))
  }
  catch (err) {
    console.log(err, 'login:error');
    yield put(setLoginError({ error: true, message: err.message }))
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeLatest(LOGIN, login)
}