import { fork, all } from 'redux-saga/effects'
import login from "./login"

const sagas = [
  login
]

export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}