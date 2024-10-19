import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to University.',
        'Take 5 classes and 1 lab classes',
        'Finish Phero classes',
        'Practice 4 hours!'
    ]
  return (
    <ul>
        {
            todos.map((todo, todoIndex)=>{
                return(
                    <li key={todoIndex}>{todo}</li>
                )
            })
        }
    </ul>
  )
}
