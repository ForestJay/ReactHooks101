import React, { useState, useEffect } from "react";

function useInput() {
  const [value, setValue] = useState('')

  function onChange(event) {
    setValue(event.target.value)
  }

  return {
    value,
    onChange
  }
}

function App() {
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        {...useInput}
      />

      <input
        type="text"
        placeholder="Last Name"
        {...useInput}
      />

      <input
        type="number"
        placeholder="Age"
        {...useInput}
      />
    </form>
  )
}

export default App;
