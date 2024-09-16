import { useEffect, useState } from 'react'
import './Vindu.css'

export default function Vindu({ setShow, todo, id, setTodos, todos }) {

    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(todo.content)
    }, [todo])

    function HandleClick(event) {
        event.preventDefault()
        const newTodos = todos
        const index = newTodos.findIndex((val) => val.id === id)
        newTodos[index].content = value
        setTodos(newTodos)
        setShow(false)
    }

    return(
        <div className="mainWin">
            <div className="editWin">
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
                <button onClick={HandleClick}>Save</button>
                <button onClick={() => setShow(false)}>Close</button>
            </div>
        </div>
    )
}