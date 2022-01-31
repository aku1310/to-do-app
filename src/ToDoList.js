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

    function taskCompleted(ItemID) {
        setToDos(oldTodos => oldTodos.map(item =>
            {
                if(item.id === ItemID) {
                    item.isComplete = !item.isComplete
                }
                return item
            }))
    }

  return (
      <>
        <div id = "heading">
            <h1>Hope you have a great day!</h1>
            <p>What are your plans?</p>
        </div>
        <div id = "input-area">
            <form id = "form" onSubmit={CreateToDo}>
                <input type = "text" id = "input-box" placeholder = "Add an item to do" value = {value} onChange = {event => setValue(event.target.value)}>

                </input>
                <button type = "submit" id = "submit-btn">
                    +
                </button>
            </form>
        </div>
        <div id = "list">
            <ul>
                {todos.map(item => 
                    <div id = "item-btns" key = {item.id}>
                        <li className = {item.isComplete ? "strikethrough" : ""}>{item.todo}</li>
                        <button  id = "check-btn" onClick = {() => taskCompleted(item.id)}>✔</button>
                        <button id = "del-btn" onClick={() => deleteItem(item.id)}>DEL</button>
                    </div>)}
            </ul>
        </div>
      </>
  )
}

export default ToDoList;