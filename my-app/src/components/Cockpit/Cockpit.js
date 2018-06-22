import React from 'react';
import myclasses from './Cockpit.css';



const cockpit = (props) =>{
    let btnclass ='';
   
    if(props.showPersons){
        btnclass=myclasses.red;
    }

    const classes = [];
 if(props.person.length<=2){
   classes.push(myclasses.red);

 }
 if(props.person.length<=1){
   classes.push(myclasses.bold);
 }
    return(
      <div className={myclasses.Cockpit}>
        <h1>hi , i am the react </h1>
        <p className={classes.join(' ')}>this is working</p>
        <button
        className={btnclass} onClick={props.clicked}/*{this.switchNameHandler.bind(this,'Maximelian')}*/>Toggle person</button>
        <button onClick={props.login}>Log in</button>
        </div>
    )
};

export default cockpit;