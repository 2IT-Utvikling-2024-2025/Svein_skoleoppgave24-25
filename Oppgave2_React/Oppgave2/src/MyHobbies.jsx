import { useState } from 'react'
import './MyHobbies.css'

const hobbies = [
    { title: "Utvikling", isFav: true, upvotes: 0, id: 0 },
    { title: "Gaming", isFav: false, upvotes: 0, id: 1 }
]

const listItems = hobbies.sort((a,b) => b.isFav - a.isFav).map(Hobby =>
    <li key={Hobby.id} >
        <h3 style={{color: Hobby.isFav ? "#0bf911" : "white"}}>{Hobby.title}</h3>
        <VoteButton />
    </li>
)

export default function MyHobbies() {
    return (
        <div className='comp'>
            <h1 className='name'>Svein Leonides Johansen</h1>
            <ul>
            {listItems}
            </ul>
        </div>
    )
}

function VoteButton(){
    const [vote, setVote] = useState(0)


    return (
        <>
        <button className='voteBtn' onClick={() => setVote(vote + 1)}>
            {vote > 0 ? `voted ${vote.toString()} times` : 'vote'}
            </button>
        </>
    )
}