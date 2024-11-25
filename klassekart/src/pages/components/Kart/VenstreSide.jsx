import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VenstreSide({data}) {

    const [items, setItems] = useState([])

    useEffect(() => {
            const antallRader = Math.ceil(data.length / 5);

    const plasser = []

    for (let i = 0; i < antallRader; i++) {
        plasser.push(i * 5);
        plasser.push(i * 5 + 1);   
    }

    const pulter = []

    for (let i = 0; i < antallRader; i++) {
        for (let j = 0; j < 2; j++) { 
            const index = plasser[i * 2 + j]; 
            if (index < data.length) { 
                if(data[index]?.name){
                pulter.push(
                    <Link
                        key={data[index].id}
                        to={`/profile/${data[index].id}`}>
                        {data[index].name}
                    </Link>
                );
            }
            }
        }
    }
    setItems(pulter)
    }, [data]);


    return (
        <div className='gridLeftContainer'>
            {items}
        </div>
    )
}