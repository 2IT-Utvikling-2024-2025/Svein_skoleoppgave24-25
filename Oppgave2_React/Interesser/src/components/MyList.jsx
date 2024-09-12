import { useState } from "react"

const myList = [
    {title: "banan", id: 1},
    {title: "Eple", id: 2},
    {title: "Pære", id: 3}
]

export default function MyList(){

    const [vote, setVote] = useState(0)

    function handleClick(){
        setVote(vote + 1)
    }

    return(
        <>
        <h1>MyList</h1>
        <ul>
            {myList.map(item => <li key={item.id}>{item.title}<VoteButton vote={vote} onClick={handleClick}/></li>)}
        </ul>
        </>
    )
}

function VoteButton({vote, onClick}){
    

    return(
        <>
        <button onClick={onClick}>Voted {vote} times</button>
        </>
    )
}