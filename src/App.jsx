import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
        <Carousel />
      </div>
    </>
  )
}

export default App
