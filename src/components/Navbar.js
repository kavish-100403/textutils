import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  // const colorPicker = () => { 
  //   // var color = (document.getElementById("colorpicker")).select();
  //   var selectColor = (document.getElementById("colorpicker")).select();
  //   // var color = `#${selectColor}`;
  //   console.log(selectColor)
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link"  to="/">Home</Link>
        </li>
        <li className="nav-item">
                          <Link className="nav-link" to="/about">{ props.aboutText}</Link>
        </li>
        
          </ul>
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={} style={{ height: '30px', width: '30px' }} > </div>
          </div> */}
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          {/* if?then:else */}
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
        </div>
  </div>
      </nav>

  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,     //To compulsary set the title
    aboutText: PropTypes.string
}

Navbar.defaultProps = {                 //To set the default value for props
    title: "Set Title here",
    aboutText:"About text here"
}