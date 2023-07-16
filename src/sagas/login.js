import { call, put, takeLatest } from "redux-saga/effects";
import {
  setUser,
  login,
  inlineLoading
} from '../actions/'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getUser } from "../api/graphql";

export function* loginSaga({ payload }) {
  console.log('hitting saga');
  try {
    const useryuh = yield getUser()
    console.log(useryuh, 'user CE:TEST');

    // yield put(inlineLoading(true))
    const { email, password } = payload || {}
    const res = yield signInWithEmailAndPassword(auth, email, password)
    const { user } = res || {}
    yield put(setUser(user))
    yield put(inlineLoading(false))
    yield put(login.success())
  }
  catch (err) {
    console.log(err, 'login:error');
    yield put(inlineLoading(false))
    yield put(login.error(err))
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeLatest([login.type.PENDING], loginSaga)
}