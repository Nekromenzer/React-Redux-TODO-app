import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/app.actions'

const TodoInput = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addTodo({ id: Math.random(), name: task }))
    setTask('')
  }
  return (
    <div>
      <input type='text' value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default TodoInput
