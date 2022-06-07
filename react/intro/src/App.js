import { useState } from 'react'
import ShowAssistant from './ShowAssistant'


function App () {
  const [name, setName] = useState("Yvens");
  return (
    <div className='App'>
      <ShowAssistant name={name}/>
    </div>
  )
}

export default App
