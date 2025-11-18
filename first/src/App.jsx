import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/star-pattern'
function App() {
  return (
    <div className='App'>
      {/*accordian of multi selection*/}
      {/* <Accordian/> */}
      {/* RandomColor generation */}
      {/* <RandomColor/> */}
      <StarRating/>
    </div>
  )
}

export default App
