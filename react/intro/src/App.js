import './App.css'

import { useEffect, useState } from 'react'

// function ShowQuotesDestructuration({quote, image}) {
//   return <>
//     <h3>{quote}</h3>
//   <img src={image} alt="" />
//   </>;
// }
function ShowQuotes (props) {
  useEffect(() => {
    return () => {
      console.log('Show A se démonte')
      props.handleReset()
    }
  }, [props.show])

  return (
    <div className='showtab'>
      {props.quotes.length > 0 ? (
        <>
          {' '}
          <h3>{props.quotes[0].quote}</h3>
          <img src={props.quotes[0].image} alt='' />
        </>
      ) : null}
    </div>
  )
}

function ShowQuotes2 (props) {
  useEffect(() => {
    return () => {
      console.log('Show A se démonte')
      props.handleReset()
    }
  }, [props.show])

  return (
    <div className='showtab'>
      {props.quotes.length > 0 ? (
        <>
          {' '}
          <h3>{props.quotes[0].quote}</h3>
          <img src={props.quotes[0].image} alt='' />
        </>
      ) : null}
    </div>
  )
}

function App () {
  const [quotes, setQuotes] = useState([])
  const [quotesB, setQuotesB] = useState([])
  const [show, setShow] = useState(true)

  const handleResetA = () => {
    setQuotes([])
  }
  const handleResetB = () => {
    setQuotesB([])
  }

  const getSomethingA = async () => {
    const promise = await fetch(
      'https://simpsons-quotes-api.herokuapp.com/quotes?count=1'
    )
    const result = await promise.json()
    setQuotes(result)
    // console.log("promise: ", promise);
    //console.log('result :', result) // tableau de citations
  }

  const getSomethingB = async () => {
    const promise = await fetch(
      'https://simpsons-quotes-api.herokuapp.com/quotes?count=1'
    )
    const result = await promise.json()
    setQuotesB(result)
    // console.log("promise: ", promise);
    //console.log('result :', result) // tableau de citations
  }

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Afficher à gauche ou à droite
      </button>
      <div className='App'>
        <div className='left'>
          {show ? (
            <>
            <button onClick={() => getSomethingA()}>Get quotes à gauche</button>
              <ShowQuotes
                show={show}
                handleReset={handleResetA}
                quotes={quotes}
              />
            </>
          ) : null}
        </div>
        <div className='right'>
          {show ? null :
            <>
              <button onClick={() => getSomethingB()}>
                Get quotes à droite
              </button>
              <ShowQuotes2
                show={show}
                handleReset={handleResetB}
                quotes={quotesB}
              />
            </>
          }
        </div>
      </div>
    </>
  )
}

export default App
