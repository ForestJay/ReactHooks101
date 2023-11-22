import React, { useState, useEffect } from "react";

function App() {
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
