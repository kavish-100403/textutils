// import logo from './lref="/"ogo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState} from 'react'

// let name="kavish"
function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not

  const toggleMode = () => { 
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "gray"
      
    }
    else { 
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }

  return(
    <>
      <Navbar title="TextUtils"  aboutText="About Us" mode={mode} toggleMode={toggleMode}  />
      <div className="container my-3" >
        <TextForm heading="Enter the Text to analyze below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
)
}

export default App;
