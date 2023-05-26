import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(sagas)

export { store }
