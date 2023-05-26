import { fork, all } from 'redux-saga/effects'
import loginSaga from "./login"

const sagas = [
  loginSaga
]

export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}