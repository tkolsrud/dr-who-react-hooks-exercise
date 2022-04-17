import React from 'react'
import DivThree from './DivThree'

const DivTwo = (props) => {
    return (
        <div>
            <DivThree tardis={props.tardis} />
            <DivThree tardis={props.tardis} />
        </div>
    )
}

export default DivTwo