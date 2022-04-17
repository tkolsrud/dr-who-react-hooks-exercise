import React from 'react'
import DivTwo from './DivTwo'

function DivOne(props){
    return <div>
        <DivTwo tardis={props.tardis} />
    </div>
}

export default DivOne