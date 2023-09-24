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
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
                          <Link className="nav-link" to="/about">{ props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      {/* <form className="d-flex mx-3">
        <input type="color" id="colorpicker" value={colorPicker===null?"#000000":colorPicker} name='colorpicker'/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
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