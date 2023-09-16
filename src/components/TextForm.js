import React, { useState } from 'react'

//The value are being added to the 'text' variable
//'setText' is being used to update the 'text' values


export default function TextForm(props) {
    //This is part of Hooks https://legacy.reactjs.org/docs/hooks-intro.html
    const handleUpClick = () => { 
        // console.log("Uppercase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => { 
        // console.log("Uppercase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleLClearText = () => { 
        // console.log("Uppercase was Clicked " + text);
        let newText = "";
        setText(newText);
    }
    const handleLSpeak = () => { 
        // console.log("Uppercase was Clicked " + text);
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        
    }
    //When we tr to change anything in the textbox an event i generated 
    //That event is use to change the values in the textbox
    const handleOnChnage = (event) => { 
        // console.log("Onchange")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
   
    return (
        <>
        <div className='container'>
            
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter Text Here' id="myBox" value={text} onChange={ handleOnChnage} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLClearText}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleLSpeak}>Speak</button>
            </div>
            <div className="container my-3">
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
  )
}
