import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Names from './components/Names'

function App() {

  let arr=['hitesh','Ramesh','Rahul','rajveer']

  return (
    <>

    <Names></Names>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m mb-8'>hi hitesh</h1>
<Card username={arr}></Card>

    </>
  )
}

export default App
