import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos = [
        'Go to University.',
        'Take 5 classes and 1 lab classes',
        'Finish Phero classes',
        'Practice 4 hours!'
    ]
  return (
    <ul className='main' style={{padding: '20px'}}>
        {
            todos.map((todo, todoIndex)=>{
                return(
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })
        }
    </ul>
  )
}
