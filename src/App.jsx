import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import XLogin from './components/XLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <XLogin />
    </>
  )
}

export default App
