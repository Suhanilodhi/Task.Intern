import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Sidebar from './components/Sidebar'


function App(){
    return(
      <>
      <Navbar/>
      <div class="Sidenav">
        <Sidebar/>
      </div>
      <div class="container my-3">
        <Textform/>
      </div>

  

    
     </>
    );
}

export default App
