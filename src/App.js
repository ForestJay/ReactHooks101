import React, { useState, useEffect } from "react";

function useInput() {
  const [person, setState] = useState({
    firstName: '',
    lastName: '',
    age: 1
  })

  function handleFirstNameChange(event) {
    setState({
      ...person, firstName: event.target.value
    })
  }

  function handleLastNameChange(event) {
    setState({
      ...person, lastName: event.target.value
    })
  }

  function handleAgeChange(event) {
    setState({
      ...person, age: event.target.value
    })
  }

  return {
    person,
    handleFirstNameChange,
    handleLastNameChange,
    handleAgeChange
  }
}

function App() {
  const { person, handleFirstNameChange, handleLastNameChange, handleAgeChange } = useInput()

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={person.lastName}
        onChange={handleLastNameChange}
      />

      <input
        type="number"
        placeholder="Age"
        value={person.age}
        onChange={handleAgeChange}
      />
    </form>
  )
}

export default App;
