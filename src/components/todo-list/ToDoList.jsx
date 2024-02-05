import React, { useState } from 'react'
import './ToDoList.css'

const ToDoList = () => {
    const [newItem, setNewItem] = useState('')
    const [items, setItems] = useState([])

    const addItem = () => {
        if (!newItem) {
            alert('Press enter sn item.')
            return
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        }
        setItems((oldList) => [...oldList, item])

        setNewItem('')
    }

    const deleteItem = (id) => {
        const newArray = items.filter((item) => item.id !== id)
        setItems(newArray)
    }



    return <div className='app'>
        <h1>My Todo List</h1>
        <input type="text" placeholder='Add an item...' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button onClick={addItem}>Add Task</button>

        <ul>
            {items.map((item) => {
                <div>
                    <li key={item.id} >
                        {item.value}
                        <button onClick={deleteItem(item.id)}>delete</button>
                    </li>
                    <div>
                        <input type="text" />
                        <button>Update</button>
                    </div>
                </div>
            })}
        </ul>
    </div>

}

export default ToDoList