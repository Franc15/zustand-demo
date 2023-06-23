import { useState } from 'react'
import { Counter } from './Counter'
import { PokemonList } from './PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Counter />
      {/* <PokemonList /> */}
    </div>
  )
}

export default App
