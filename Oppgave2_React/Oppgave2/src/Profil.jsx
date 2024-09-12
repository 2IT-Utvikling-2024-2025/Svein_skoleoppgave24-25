import img from './assets/profilBilde.jpg'
import './Profil.css'

export default function Profil(){
    return (
        <div className='container'>
        <img src={img} alt="profilbilde" />
        <div>
            <h2>Svein Leonides Johansen</h2>
            <p>Jeg er en norsk IT elev på drømtorp VGS og lærer om react og bra kode.</p>
        </div>
        </div>
    )
}