import { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  {/**destructuring property hook */}
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  {/*json stringify*/}
  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

{/**Add new tasks*/}
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);

  }
{/*delete existing task*/}
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index;
    })
    persistData(newTodoList)
    setTodos(newTodoList);
  }
{/*edit added tasks*/}
  function handleEditTodo(index){
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

{/*effect use*/}
  useEffect(() =>{
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  {/*main div*/}
  return (
    <>
      <main>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>

        <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
      </main>
    </>
  )
}

export default App
