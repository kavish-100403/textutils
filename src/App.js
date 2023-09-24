// import logo from './lref="/"ogo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

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
      document.title = 'TextUtils - Dark Mode'
      //To show something at every few seconds we can use setInterval
      // setInterval(() => {
      //   document.title='TextUtils is Amazing'
      // }, 1000);
      // setInterval(() => {
      //   document.title='Install TextUtils'
      // }, 1500);
    }
    else { 
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - Light Mode'
    }
  }

  return(
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert= {alert} />
      <div className="container my-3" >
          
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>
          </Route>
      </Switch>
        {/* <About /> */}
      </div>
      </Router>
    </>
)
}

export default App;
