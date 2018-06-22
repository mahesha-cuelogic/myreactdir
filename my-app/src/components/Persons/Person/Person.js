
import React, {Component} from 'react';
import classes from './Person.css';
// import Radium from 'radium';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App'

class Person extends Component { 
    constructor(props){
    //can only access props directly...
    super(props);
    this.inputElement = React.createRef();
  console.log('[person.js]--> ',props.title);
  }
  componentWillMount(){
    console.log('[person.js] Inside component will mount');
  }
  componentDidMount(){
    console.log('[person.js] Inside Component did mount');
    if(this.props.position === 0){
      this.inputElement.current.focus();
    }
   
  }
  componentWillUnmount(){
    console.log('[person.js] Inside Component will Un mount');
  }
render(){
  console.log('[person.js] Inside render');
  //ref only available with statefull components
  // ref will create a property for your entire class
        return( 

            <div className={classes.Person}>
           <AuthContext.Consumer>
            {auth => auth ?<p>I am authenticated</p>:null}
            </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name}. i am {this.props.age} year old.</p> 
                <p>{this.props.children}</p>
                <input
                ref={this.inputElement}
                // ref = {(inp)=> {this.inputElement = inp}} 
                type='text' 
                onChange={this.props.changed}  
                value={this.props.name}/>
            </div>
        )

    }
}
Person.PropTypes = {
  click :PropTypes.func,
  name :PropTypes.string,
  age : PropTypes.number,
  changed : PropTypes
}


export default Person;