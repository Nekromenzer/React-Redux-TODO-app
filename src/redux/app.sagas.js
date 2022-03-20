import { takeLatest, put, all, call } from 'redux-saga/effects'
import { deleteTodoSaga } from './app.actions'

export function * DeleteTodoSagaWatcher ({ payload: { id } }) {
  yield put(deleteTodoSaga(id))
}

export function * onDelete () {
  yield takeLatest('DELETE_TODO', DeleteTodoSagaWatcher)
}

export function * todos () {
  yield all([onDelete()])
}
