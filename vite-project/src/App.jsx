import { useState } from 'react'

import './App.css'
import Time from './components/Time.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Time/>
    </>
  )
}

export default App
