import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/app.actions'

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false)
  const [task, setTask] = useState(todo.name)
  const dispatch = useDispatch()

  return (
    <div>
      {edit ? (
        <input
          type='text'
          onChange={e => setTask(e.target.value)}
          value={task}
        />
      ) : (
        <>{todo.name}</>
      )}
      <button
        onClick={() => {
          setEdit(!edit)
          if (edit) {
            setTask(todo.name)
            dispatch(updateTodo({ ...todo, name: task }))
          }
        }}
      >
        {!edit ? 'Edit' : 'Update'}
      </button>
      <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
