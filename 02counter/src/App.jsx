import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5)
  

//let Counter =5

const addValue = () => {
  
  setCounter(Counter + 1)
  //console.log(Counter)
}
  return (
    <>
     <h1>Chai aur Coffee</h1>
     <h2>Counter value: {Counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <button onClick={() => {
       if (Counter <= 0) {
         setCounter(0)
       } else {
         setCounter(Counter - 1)
       }
     }}>Decrease Value</button>


    </>
  )
}

export default App
