

export default function KlasseBoks({elev, webID}) {
    return(
        <div>
            <a href={`/elev/${webID}`}>{elev.navn} <br/> {elev.email}<br/> {elev.plass}</a>
        </div>
    )
}