import { useParams } from "react-router-dom"
import data from '../data.json'

export default function Profile() {

    const { bruker } = useParams()

    const check = data.find((brukerdata) => brukerdata.id === Number(bruker))

    return (
        <>
            <h1>{check.navn}</h1>
            <p>Bursdag: {check.fødselsdato}</p>
            <p>Kjønn: {check.kjønn}</p>
            <p>Plass nummer: {check.id.toString()}</p>
        </>
    )
}