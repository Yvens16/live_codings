import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {MyContext} from "./MyContext";
import About from './About';
function App() {

  return (
    <div className="App">
      <MyContext.Provider value={{name: "Yvens"}}>
          <About/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
