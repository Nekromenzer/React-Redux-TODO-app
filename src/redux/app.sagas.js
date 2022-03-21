import { takeLatest, put, all, call } from 'redux-saga/effects'
import { deleteTodoSaga, addTodoSaga, updateTodoSaga } from './app.actions'

// add
export function * addTodoSagaWatcher ({ payload }) {
  yield put(addTodoSaga(payload))
}

export function * onAdd () {
  yield takeLatest('ADD_TODO', addTodoSagaWatcher)
}

// add
export function * updateTodoSagaWatcher ({ payload }) {
  yield put(updateTodoSaga(payload))
}

export function * onUpdate () {
  yield takeLatest('UPDATE_TODO', updateTodoSagaWatcher)
}

//delete
export function * deleteTodoSagaWatcher ({ payload: { id } }) {
  yield put(deleteTodoSaga(id))
}

export function * onDelete () {
  yield takeLatest('DELETE_TODO', deleteTodoSagaWatcher)
}

// all
export function * todos () {
  yield all([onDelete(), call(onAdd), call(onUpdate)])
}
