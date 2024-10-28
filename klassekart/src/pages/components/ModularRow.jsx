import ModularBlockColumn from './ModularBlockColumn'
import { useEffect, useState } from 'react'

export default function ModularRow({ data, columnBlocks }) {
    

    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        console.log(data)
        console.log(blocks)
        if(data && blocks){

        let allColumns = 0;

        blocks.map((block)=>{
            columns+=block.antallColumns
        })

        let curIndex = 0;

        for (let index = 0; index < array.length; index++) {
            
            const match = blocks.find((block)=>block.columnIndexs.includes(curIndex))

            if(match){
                match.data.push(data[i])
            }

            curIndex++

            if (curIndex>allColumns){
                curIndex=0;
            }

            setBlocks([...blocks])
        }
    }
    }, [data, blocks])

    //? data = [{id: 1, navn: "example", plass: "1a"}]
    //? ColumnBlocks = [1, 5, 3]
    //? Blocks = [{id: 0, ColumnIndexs: [0, 1], antallColumns: 1, data: [{id: 1, navn: "example", plass: "1a"}, ...]}]

    function setBlockData(index, antallColumns) {
        const block = {
            id: index,
            columnIndexs: [],
            antallColumns: antallColumns,
            data: []
        }

        if (blocks.length === 0){
            console.log(blocks)
            for (let i = 0; i < antallColumns; i++) {
                block.columnIndexs.push(i)
            }
        } else if (blocks.length > 0) {
            console.log("problem area")
            console.log(blocks)
            console.log(index)

            const lastColumnIndex = blocks[index - 1].columnIndexs[blocks[index - 1].columnIndexs.length - 1];

            for (let i = lastColumnIndex + 1; i < lastColumnIndex + 1 + antallColumns; i++) {
                block.columnIndexs.push(i)
            }
        }
        console.log(block)
        setBlocks(prevData => [...prevData, block])
    }

    return (
        <div className='modularRow'>
            {columnBlocks.map((columns, index) => {
                console.log(columns.val)
                console.log(index)
                setBlockData(columns.id, columns.val)
                return(
                <ModularBlockColumn
                    key={columns.id}
                    data={[{id: 1, navn: "example", plass: "1a"}]}
                    columns={columns.val}
                />
                )
})}
        </div>
    )
}