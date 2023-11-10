import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
