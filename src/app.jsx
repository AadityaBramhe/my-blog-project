import { useState } from 'preact/hooks'
import './app.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export function App() {
 

  return (
    <>
       <Navbar/>
       <Home/>
    </>
  )
}
