import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/app.actions'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <div>
      {todo.name}
      <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
