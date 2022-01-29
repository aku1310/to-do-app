import React from 'react';
import { useState } from 'react';

var globalID = 0;

function ToDoList() {
    const [value, setValue] = useState("")
    const [todos, setToDos] = useState([])

    function CreateToDo(event){
        event.preventDefault()
        setToDos(oldTodos => {
            setValue('')
            return [...oldTodos, {todo: value, id: globalID++}]
        });
    }

    function deleteItem(itemID){
        setToDos(oldTodos => oldTodos.filter(item => item.id !== itemID))
    }

  return (
      <>
        <form onSubmit={CreateToDo}>
            <input type = "text" value = {value} onChange = {event => setValue(event.target.value)}>

            </input>
            <button type = "submit">
                Submit
            </button>
        </form>
        <ul>
            {todos.map(item => 
                <div key = {item.id}>
                    <li>{item.todo}</li>
                    <button onClick={() => deleteItem(item.id)}>Done!</button>
                </div>)}
        </ul>
      </>
  )
}

export default ToDoList;