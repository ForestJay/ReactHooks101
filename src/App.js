import React, { useState, useEffect } from "react";

function useInput() {
  const [value, setValue] = useState('')

  return {
    value,
    setValue
  }
}

function App() {
  const { firstName, handleFirstNameChange } = useInput()
  const { lastName, handleLastNameChange } = useInput()
  const { age, handleAgeChange } = useInput()

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
    </form>
  )
}

export default App;
