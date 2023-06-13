import { useState } from 'react'

export function Counter() {
  // Destructuring the returned array
  // into named variables
  const [ count, setCount ] = useState(0)

  // Section for event handlers
  function incrementCount() {
    setCount(
      (countOldValue) => countOldValue + 1
    )
  }

  function setCountToTen() {
    setCount(10)
  }

  // The return statemnet should be kept clear
  // of as much logic as possible
  return (
    <main>
      <h1>Count: {count}</h1>

      <button
        onClick={incrementCount}
      >
        Increment
      </button>
      <button
        onClick={setCountToTen}
      >
        Set to 10
      </button>
    </main>
  )
}