import { useState } from 'react'
import Header from './Components/Header1/Header'
import Header3 from './Components/Header3/Header3'
import MainCover from './Components/Main-Cover/MainCover'
import Footer from './Components/Footer/Footer'
import Category from './Components/CategoryPages/Category';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainCover />,
    },
    {
      path: '/Category',
      element: <Category />
    }
  ])
  return (
    <>
      {/* <h1>React app</h1> */}
      <Header></Header>
      <Header3></Header3>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </>
  )
}

export default App
