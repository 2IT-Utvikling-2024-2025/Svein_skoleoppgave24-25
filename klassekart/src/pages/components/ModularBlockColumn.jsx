

export default function ModularBlockColumn({ data, columns }) {

    //TODO: Add each column dynamically 

    console.log(data)

    return (
        <div className='modularBlockColumn' style={{display:"grid", gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {data.map((data)=>{
                                    <button
                                    key={data.id}
                                    onClick={() => window.location.href = `/profile/${data.id}`}>
                                    {data.navn}
                                </button>
            })}
        </div>
    )
}