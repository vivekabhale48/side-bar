import { useState } from 'react'
import Header from './Components/Header1/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React app</h1> */}
      <Header></Header>
    </>
  )
}

export default App
