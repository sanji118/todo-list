import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCard from './components/TodoCard'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    'Go to University.',
    'Take 5 classes and 1 lab classes',
    'Finish Phero classes',
    'Practice 4 hours!'
  ]);
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index;
    })
    setTodos(newTodoList);
  }

  function handleEditTodo(index){

  }
  return (
    <>
      <main>
        <TodoInput handleAddTodos={handleAddTodos}/>

        <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
      </main>
    </>
  )
}

export default App
