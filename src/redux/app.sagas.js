import { takeLatest, put, all, call } from 'redux-saga/effects'
import { deleteTodoSaga, addTodoSaga } from './app.actions'

export function * addTodoSagaWatcher ({ payload }) {
  yield put(addTodoSaga(payload))
}

export function * onAdd () {
  yield takeLatest('ADD_TODO', addTodoSagaWatcher)
}

//delete
export function * deleteTodoSagaWatcher ({ payload: { id } }) {
  yield put(deleteTodoSaga(id))
}

export function * onDelete () {
  yield takeLatest('DELETE_TODO', deleteTodoSagaWatcher)
}

export function * todos () {
  yield all([onDelete(), call(onAdd)])
}
