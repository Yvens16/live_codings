import React, { useEffect, useState } from 'react'

function CustomUpdate () {
  const [name, setName] = useState('')
  const [age, setAge] = useState(26);
  /**
   * Il est possible de mettre plusieurs useEffect;
   */
  useEffect(() => {
    console.log('always update')
  });
  useEffect(() => {
    console.log('update only once')
  }, []);
  useEffect(() => {
    console.log('when name change only')
  }, [name]);

  useEffect(() => {
    console.log('when age only change');
  }, [age]);

  // useEffect(() => {
  //   console.log('when both changes')
  // }, [name, age]);

  return (
    <div>
      {console.log("composant toujours avant les useEffect")}
      <h1>CustomUpdate</h1>
      <button onClick={() => setName('Yvens')}>change Name 1</button>
      <button onClick={() => setName('Yohan')}>change Name 2</button>
      <button onClick={() => setAge(34)}>change age 1</button>
      <button onClick={() => setAge(39)}>change age 2</button>
    </div>
  )
}

export default CustomUpdate
