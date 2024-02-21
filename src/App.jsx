import { useState, useEffect } from 'react'
import './style.css'

function App() {
  const [joke, setJoke] = useState("")
  const [secondJoke, setSecondJoke] = useState("")

  function handleClick() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data.type === "single") {
          return (setJoke(data.joke),
            setSecondJoke(""))
        }
        else {
          return (
            setSecondJoke(data.setup),
            setJoke(data.delivery)
          )
        }
      })
  }
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <div className='container'>
      <h1>Tell me a Joke</h1>
      <div className='text-div'>
        <p>"{secondJoke}"</p>
        <p>"{joke}"</p>
        <button onClick={handleClick}>Next joke</button>
      </div>
    </div>
  )
}


export default App
