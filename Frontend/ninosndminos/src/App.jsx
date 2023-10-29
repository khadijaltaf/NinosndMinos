import React from "react"
import Nav from './components/nav/Nav.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'


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
