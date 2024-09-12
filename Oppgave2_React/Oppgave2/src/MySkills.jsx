import { useEffect, useState } from 'react'
import './MySkills.css'



export default function MySkills() {

    const [hobbies, setHobbies] = useState([
    { title: "Utvikling", isFav: true, upvotes: 0, id: 0 },
    { title: "Gaming", isFav: false, upvotes: 0, id: 1 }
])
const [sorted, setSorted] = useState([])


    return (
        <div className='comp'>
            <h1 className='name'>Ferdigheter</h1>
            <ul>
            {sorted.map(Hobby =>
    <li key={Hobby.id} >
        <h3 style={{color: Hobby.isFav ? "#0bf911" : "white"}}>{Hobby.title}</h3>
        <VoteButton id={Hobby.id} set={setHobbies} hobbies={hobbies} />
    </li>
)}
            </ul>
        </div>
    )
}

function VoteButton({id, set, hobbies}){
    const [vote, setVote] = useState(0)

    function handleClick(){
        setVote(vote + 1)
        const index = hobbies.findIndex(hobby => hobby.id === id)
        const hobby = hobbies
        hobby[index].upvotes = hobby[index].upvotes + 1
        set(hobby)
        console.log(hobbies)
    }

    return (
        <>
        <button className='voteBtn' onClick={handleClick}>
            {vote > 0 ? `voted ${vote.toString()} times` : 'vote'}   
            </button>
        </>
    )
}