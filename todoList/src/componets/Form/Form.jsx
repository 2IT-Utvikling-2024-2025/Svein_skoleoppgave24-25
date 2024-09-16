import { useState } from 'react'
import './TodoForm.css'

export default function Form({ todos, setTodos, ids, setIds }) {

    const [value, setValue] = useState('')

    function HandleClick(event){
        event.preventDefault()
        setTodos([...todos, {id: ids++, content: value, completed: false, status: "Todo"}])
        setIds(ids++)
    }

    return (
        <form onSubmit={HandleClick}>
            <input className='FormInput' type="text" placeholder="Enter Todo" value={value} onChange={(event) => setValue(event.target.value)} />
        </form>
    )
}