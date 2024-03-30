import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './Component/Addtodo'
import Todos from './Component/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Learn about redux toolkit</h2>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
