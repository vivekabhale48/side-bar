import { useState } from 'react'
import Header from './Components/Header1/Header'
import MainCover from './Components/Main-Cover/MainCover'
import Footer from './Components/Footer/Footer'
import Category from './Components/CategoryPages/Category';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
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
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </>
  )
}

export default App
