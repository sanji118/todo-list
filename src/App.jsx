import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCard from './components/TodoCard'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <main>
        <TodoInput/>

        <TodoList/>
      </main>
    </>
  )
}

export default App
