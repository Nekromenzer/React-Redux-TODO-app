import './App.css'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

function App () {
  return (
    <div className='App'>
      <TodoList />
      <TodoInput />  
    </div>
  )
}

export default App
