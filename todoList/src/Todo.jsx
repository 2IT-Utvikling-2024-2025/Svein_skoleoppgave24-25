import { useEffect, useState } from 'react'
import Form from './componets/Form/Form.jsx'
import './Todo.css'
import TodoList from './componets/list/TodoList.jsx'
import Alert from './componets/Alert.jsx'

function Todo() {

  const [todos, setTodos] = useState([])
  const [ids, setIds] = useState(0)


  return (
    <div className='main'>
      <h1>Todo App</h1>
      <Form todos={todos} setTodos={setTodos} ids={ids} setIds={setIds} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Todo
