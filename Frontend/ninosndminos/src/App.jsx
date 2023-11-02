import React from "react"
import Nav from './components/nav/Nav1.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'
import Login from "./Components/Login/Login.jsx"


function App() {

  return (
   <div>
      
    
    <ErrorBoundary>
      <Nav />
      
    </ErrorBoundary>


   </div>
  )
}

export default App
