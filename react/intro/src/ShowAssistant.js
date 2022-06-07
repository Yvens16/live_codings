import React, { useState } from 'react'

function ShowAssistant(props) {
  const [name, setName] = useState('')
  const handleName = param => {
    if (param === true) setName('Uriel mon assistant')
    if (param === false) setName('Yohan est mon assistant')
  }
  return (
    <>
      <h1>{props.name} is the worst</h1>
      <h1>{name}</h1>
      <button onClick={() => handleName(true)}>Affiche mon assistant</button>
    </>
  )
}

export default ShowAssistant
