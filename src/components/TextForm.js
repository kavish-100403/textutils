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
    //When we tr to change anything in the textbox an event i generated 
    //That event is use to change the values in the textbox
    const handleOnChnage = (event) => { 
        // console.log("Onchange")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text here: ");
   
    return (
        <div>
            {/* console.log(useState("Enter text here2")); */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={ handleOnChnage} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
  )
}
