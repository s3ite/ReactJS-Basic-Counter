import React from 'react';

function Button(props){
    return <button onClick = {props.HandleClick}>{props.sign}</button>
}

export default Button;