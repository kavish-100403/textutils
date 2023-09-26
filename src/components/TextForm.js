import React, { useState } from 'react'

//The value are being added to the 'text' variable
//'setText' is being used to update the 'text' values


export default function TextForm(props) {
    
    //This is part of Hooks https://legacy.reactjs.org/docs/hooks-intro.html
//To Uppercase the text written in textbox   
    const handleUpClick = () => { 
        // console.log("Uppercase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
//To lowercase the text written in textbox
    const handleLoClick = () => { 
        // console.log("Uppercase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

//To clear the text written in Textbox
    const handleLClearText = () => { 
        // console.log("Uppercase was Clicked " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text", "success");
    }

//To speak the text written in Textbox
    const handleLSpeak = () => { 
        // console.log("Uppercase was Clicked " + text);
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking...", "success");
        
    }

    //To Copy the text written in TextBox
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        console.log(text.select());
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }
    //When we tr to change anything in the textbox an event i generated 
    //That event is use to change the values in the textbox
    const handleOnChange = (event) => { 
        // console.log("Onchange")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
   
    return (
        <>
            <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}}>
            
            <h2>{props.heading}</h2>
            <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter Text Here' id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white",color: props.mode === "dark" ? "white" : "black"}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLClearText}>Clear</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLSpeak}>Speak</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
                <h2>Your Text summary</h2>
                {/* added arrow fntion to fix the minor problem in counting the words */}
                {/* Filter is used to pass an arrow function to check the condition and then give the value */}
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                {/* <h2>Color Picker</h2>
                <p>
                    <input type="color" id="colorpicker" value="#000000" />
                </p> */}
            </div>
        </>
  )
}
