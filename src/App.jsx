import { useState } from 'react'
import './App.css'
import Body from './Components/Body'
import Input from './Components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Body />
     <Input />

    </>
  )
}

export default App
