import React from 'react';

const validation = (props)=>{
    let validationMessage = 'Text is long';
    if(props.inputLen<=5){
        validationMessage='Text too short';
    }
return(
    <div>
   {validationMessage}
    </div>
);
}

export default validation;