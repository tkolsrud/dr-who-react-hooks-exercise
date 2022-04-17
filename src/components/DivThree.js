import React, { useState } from 'react'

const DivThree = (props) => {
    const [state, setState] = useState(props.tardis)

    const updateCapitalization = () => {
      const newState = {
        name: state.caps ? state.name.toLowerCase() : state.name.toUpperCase(),
        caps: state.caps ? false : true,
      }
  
      setState(newState)
    }

    return (
        <div>
            <h3 onClick={updateCapitalization}>{state.name}</h3>
        </div>
    )
}

export default DivThree