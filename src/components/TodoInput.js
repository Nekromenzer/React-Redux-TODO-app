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

  const handleKeyDown = e => {
    var code = e.keyCode || e.key
    if (code === 'Enter' || code === 13) {
      handleSubmit()
    }
  }
  return (
    <div>
      <input
        type='text'
        value={task}
        onChange={e => setTask(e.target.value)}
        onKeyPress={e => handleKeyDown(e)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default TodoInput
