import "./App.css";
import {useState} from 'react';


function App () {
  const [name, setName] = useState("Yvens");
  return (
    <div className='App'>
      My name is {name}
      <button onClick={() => setName(name === "Yvens" ? "Michael" : "Yvens")}>Change my name</button>
    </div>
  )
}

export default App



class Example {
  constructor(name, age) {
    this.name = name;
    this.age = `${age}`;
  }
}