import React from "react"
import Nav from './components/nav/Nav1.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'
import Login from "./Components/Login/Login.jsx"
import Homepage from "./Components/HomePage/Homepage.jsx"


function App() {

  return (
   <div>
      
    
    <ErrorBoundary>
      <Homepage/>
    </ErrorBoundary>


   </div>
  )
}

export default App
