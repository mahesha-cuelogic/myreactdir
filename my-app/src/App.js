import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name : 'Mahi', age : 28 },
      { name : 'mayu', age : 27 },
      { name : 'manu', age : 26 }
    ]
  }
 swithNameHandler = (newName) => {
  //console.log('Was Clicked');
  //here we cant access persons state using this keyword like this.persons[0].name
 this.setState({
  persons: [
    { name : 'Mahesh', age : 38 },
    { name : newName, age : 37 },
    { name : 'manadi fanadi', age : 36 }
  ]}
 );
 }
 nameChangeHandler = (event) => {
   this.setState({
    persons: [
      { name : 'Mahesh', age : 38 },
      { name : event.target.value, age : 37 },
      { name : 'manadi fanadi', age : 36 }
    ]

   })
 }

  render() {
    //another method to add dynamic contents in state
    //<button onClick={() => this.switchNameHandler('mahi!!')}>Switch name</button>
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1x solid blue',
      padding: '8px',
      cursor:'pointer'
     };
    return (
      <div className="App">
      
        <h1> hii, I am mahesh</h1>
       <p>this is really working well</p>
       <button 
       style={style}
       onClick={this.swithNameHandler.bind(this,'h1')}>Switch name</button>
       
       <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
       <Person 
          name = {this.state.persons[1].name} 
          click ={this.swithNameHandler.bind(this,'h2')}
          age = {this.state.persons[1].age}
          changed={this.nameChangeHandler}></Person>
       <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div> 
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hey this is created using React'));
  }
}

export default App;
