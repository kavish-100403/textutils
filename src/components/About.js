import React from 'react'
// import PropTypes from 'prop-types'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    // {
    //     color: "black",
    //     background:"white"
    //     })
    

    let myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "rgb(36,74,104)" : "white",
        border: '1px solid',
        borderColor : props.mode==="dark"?"white":"black"
    }
    let myStyle1 = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "rgb(36,74,104)" : "white",
        // border: '2px solid',
        // borderColor : props.mode==="dark"?"white":"black"
    }

  return (
      <div className='container my-3' style={{color: props.mode === "dark" ? "white" : "#042743",}}>
          <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong>Project Description</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle1}>
                    TextUtils is a web-based text manipulation tool that allows users to perform various operations on text. Whether you need to convert text to uppercase, lowercase, copy text to the clipboard, clear the input, or even have the text spoken out loud by the machine, TextUtils has you covered.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Key Features</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle1}>
                   <ul>
                        <li>Convert text to UPPERCASE</li>
                        <li>Convert text to lowercase</li>
                        <li>Copy text to clipboard</li>
                        <li>Clear the text input</li>
                        <li>Text-to-Speech functionality to have the text spoken by the machine</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong> Technologies Used</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle1}>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <strong> Contact Us</strong>
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle1}>
                    If you have any questions, suggestions, or feedback, please feel free to reach out to us at <a href="mailto:rkpopat00@gmail.com">rkpopat00@gmail.com</a>.
                </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}
