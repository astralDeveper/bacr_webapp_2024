import React from 'react'
import Navbar from './components/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/Router/Router'

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App