import { useEffect, useState } from 'react'
import './TodoItem.css'
import Vindu from './Vindu'
import Alert from '../Alert.jsx'

export default function TodoItem({ todo, todos, setTodos, id }) {

    const [show, setShow] = useState(false)
    const [Created, setCreated] = useState(false)
    const [alertShown, setAlertShown] = useState(false)
    const [alertText, setAlertText] = useState("")
    const [alertLevel, setAlertLevel] = useState("")

    useEffect(() => {
        if (!Created) {
            setCreated(true)
        }
        else{
            setAlertText(`${todo.content} status has been changed to ${todo.status}`)
            setAlertLevel("success")
            setAlertShown(true)
            setTimeout(() => {
                setAlertShown(false)
            }, 3000)
        }
    }, [todo.status])

    function HandleClick(event) {
        event.preventDefault()
        if ( event.target.value ){
            setTodos(todos.filter((val) => 
                val.id !== id
            ))
        }
    }

    function handleDropDown(event) {
        event.preventDefault()
        const newTodos = todos
        const index = newTodos.findIndex((val) => val.id === id)
        newTodos[index].status = event.target.value
        console.log(event.target.value)
        setTodos([...newTodos])
    }

    function EditForm() {
        setShow(!show)
    }

    return (
        <>
            <div className='item'>
                <h2>{todo.content}</h2>
                <div className='actions'>
                    <select name="status" onChange={handleDropDown} value={todo.status}>
                        <option value="Todo">Todo</option>
                        <option value="In progress">In progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <div className='CheckBox'>
                        <label htmlFor="completed">Completed?</label>
                <input type="checkbox" name="completed" value={todo.completed} onChange={HandleClick}/>
                </div>
                    
                <button onClick={EditForm}>Edit</button>
                </div>
            </div>
            {show ? <Vindu setShow={setShow} todo={todo} id={id} setTodos={setTodos} todos={todos} /> : null}
            {alertShown ? <Alert alert={alertText} setAlert={setAlertShown} level={alertLevel} /> : null}
            </>
    )
}