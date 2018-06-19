import React from 'react';
import './Person.css';
//application components should change the state of application they should only render something to the dom
//you can listen to the even in component and change the state in app.js
const person = (props) => {
    return(
        <div className="Person">
    <p onClick={props.click}> I'am {props.name} and i am {props.age} years old! </p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    ) 
}

export default person;