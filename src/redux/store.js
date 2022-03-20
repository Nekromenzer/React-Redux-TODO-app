import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import { todos } from './app.sagas'

// root reducer

const sagaMiddleware = createSagaMiddleware()
const middleWares = [logger, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middleWares))

sagaMiddleware.run(todos)

export default store
