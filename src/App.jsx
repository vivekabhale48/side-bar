import { useState } from 'react'
import Header from './Components/Header1/Header'
import Header3 from './Components/Header3/Header3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React app</h1> */}
      <Header></Header>
      <Header3></Header3>
    </>
  )
}

export default App
