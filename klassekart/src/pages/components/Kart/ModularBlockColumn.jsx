import { Link } from "react-router-dom"


export default function ModularBlockColumn({ data, columns }) {

    //TODO: Add each column dynamically 

    console.log(data)

    return (
        <div className='modularBlockColumn' style={{display:"grid", gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {data.map((data)=>{
                                    <Link
                                    key={data.id}
                                    to={`/profile/${data.id}`}>
                                    {data.navn}
                                </Link>
            })}
        </div>
    )
}