import { useState } from 'react'
import './index.css'
import './styles/components.css'
import FavouriteSites from "./components/FavouriteSites.jsx"
import Profile from "./components/Profile"
import Gallery from './components/Gallery'
function App() {

  return (
    <div className="App">
      <div className="center">
        <FavouriteSites/>
        <Profile/>
        <Gallery/>
      </div>
      
    </div>
  )
}

export default App
