import data from '../../data.json'

export default function VenstreSide() {

    const antallRader = Math.ceil(data.length / 5);

    const plasser = []

    for (let i = 0; i < antallRader; i++) {
        plasser.push(i * 5);
        plasser.push(i * 5 + 1);   
    }

    let pulter = []

    for (let i = 0; i < antallRader; i++) {
        for (let j = 0; j < 2; j++) { 
            const index = plasser[i * 2 + j]; 
            if (index < data.length) { 
                pulter.push(
                    <button
                        key={data[index].id}
                        onClick={() => window.location.href = `/profile/${data[index].id}`}>
                        {data[index].navn}
                    </button>
                );
            }
        }
    }

    return (
        <div className='gridLeftContainer'>
            {pulter}
        </div>
    )
}