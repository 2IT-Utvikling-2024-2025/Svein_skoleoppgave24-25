import { useParams } from "react-router-dom"
import data from './data/data.json'

export default function Elev(){

    const params = useParams()
    const param = params.elevID
    const elev = data.elever[param]

    return(
        <div>
            <a href="/">Back</a>
            <h1>{elev.navn}</h1>
            <p>{elev.email}</p>
        </div>
    )
}