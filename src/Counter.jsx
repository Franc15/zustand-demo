import {useCombinedStore } from "./store"


export const Counter = () => {
    const counterNumber = useCombinedStore((state) => state.number)
    const increase = useCombinedStore((state) => state.increment)
    const decrease = useCombinedStore((state) => state.decrement)
    const logNumber = useCombinedStore((state) => state.logNumber)

  return (
    <div>
      <h1>Counter: {counterNumber}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  )
}
