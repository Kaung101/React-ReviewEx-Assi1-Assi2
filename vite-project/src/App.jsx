import { useState } from 'react'
import './index.css'
import './styles/components.css'
import FavouriteSites from "./components/FavouriteSites.jsx"
import Profile from "./components/Profile"
import Gallery from './components/Gallery'
import StateAssignmentOne from './components/StateAssignmentOne'
import StateAssignmentTwo from './components/StateAssignmentTwo'
function App() {

  return (
    <div className="App">
      <div className="center">
        {/* <FavouriteSites/> */}
        {/* <Profile/> */}
        {/* <Gallery/> */}
        <StateAssignmentOne/>
        <StateAssignmentTwo/>
      </div>
      
    </div>
  )
}

export default App
