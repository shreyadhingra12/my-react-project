import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/star-pattern'
import ImageSlider from './components/image-slider'
function App() {
  return (
    <div className='App'>
      {/*accordian of multi selection*/}
      {/* <Accordian/> */}
      {/* RandomColor generation */}
      {/* <RandomColor/> */}
      {/* star rating component */}
      {/* <StarRating/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} />
    </div>
  )
}

export default App
