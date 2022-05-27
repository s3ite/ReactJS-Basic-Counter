import React, {useState} from 'react';
import Button from './Button';

function App(){
    const [value, setValue] = useState(0);
    function increment(){
        setValue(oldValue => oldValue + 1);
    }

    function decrement(){
        setValue(value - 1);
    }

    return (<div className="container"> <h1>Actual value: {value}</h1> 
     <Button HandleClick = {increment} sign = '+'/> 

     <Button HandleClick = {decrement} sign = '-'/>

     </div>)
}

export default App;