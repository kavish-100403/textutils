// import logo from './lref="/"ogo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState} from 'react'

// let name="kavish"
function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  //Initially the value of alert is null so we will add a syntax to rectify this problem.

  const showAlert = (message,type) => { 
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => { 
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
      
    }
    else { 
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return(
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert= {alert} />
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
)
}

export default App;
