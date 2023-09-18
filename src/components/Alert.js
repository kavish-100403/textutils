import React from 'react'

//  When we use && then the props.alert will run first if the initial value is false then the rest f the code won't evaluate 

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        // This is capitalize first letter and rest letters will be lowercase
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
        
  )
}

export default Alert