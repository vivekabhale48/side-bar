import { useState } from 'react'
import Header from './Components/Header1/Header'
import Header3 from './Components/Header3/Header3'
import MainCover from './Components/Main-Cover/MainCover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React app</h1> */}
      <Header></Header>
      <Header3></Header3>
      <MainCover></MainCover>
    </>
  )
}

export default App
