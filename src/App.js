import {useState} from 'react'
import './App.css';

function App(props) {
  const tardis = {
    name: 'Time and Relative Dimension in Space',
    caps: false,
  }

  const [state, setState] = useState(tardis)

  const updateCapitalization = () => {
    console.log('click')
    const newState = {
      name: state.caps ? state.name.toLowerCase() : state.name.toUpperCase(),
      caps: state.caps ? false : true,
    }

    setState(newState)
  }

  return (
    <div className="App">
      <h3 onClick={updateCapitalization}>{state.name}</h3>
    </div>
  );
}

export default App;
