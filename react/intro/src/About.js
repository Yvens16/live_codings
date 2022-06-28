import React, {useContext} from 'react'
import { MyContext } from './MyContext';

function About() {
  const {name} = useContext(MyContext);
  return (
    <div>About {name} </div>
  )
}

export default About