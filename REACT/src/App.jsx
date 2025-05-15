import { useState } from 'react'
import './App.css'
import Comp from './components/Comps'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Comp/>
    </>
  )
}

export default App
