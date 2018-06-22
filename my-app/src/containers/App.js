import React, { Component } from 'react';
import myclasses from './App.css';
// import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

export const AuthContext= React.createContext(false);
class App extends Component {

  constructor(props){
    //can only access props directly...
    super(props);
  console.log('[App.js]--> inside constructor',props.title);
  }
  componentWillMount(){
    console.log('[App.js] Inside component will mount');
  }
  componentDidMount(){
    console.log('[App.js] Inside Component did mound');
  }
  state ={
    person:[
          {id:'as' , name:'sumit',age:"22" },
          {id:'sd' ,name:'mahesh',age:23},
          {id:'df' , name:'sagar',age:25}
        ],
        showPersons:false,
        toggleClicked : 0,
        authenticated:false
  }
  
  switchNameHandler= (newname) =>
  {
    console.log("button clicked!!");

    this.setState({
      person:[
        { name:newname,age:22 },
        {name:'mahesh',age:23},
        {name:'sagar',age:30}
      ]

    })
  }

  nameChangeHandler= (event,personId) =>
  {
      const personIndex=this.state.person.findIndex(p =>{
        return p.id === personId;
      } )

     // const person=this.state.person[personIndex];//this return refferenece of array elment not value

        const person={   //create new object and spred operator to get value
          ...this.state.person[personIndex]
        };

        person.name=event.target.value;

        const persons=[...this.state.person];
        persons[personIndex]=person;
        
     this.setState({person:persons })
  }
  
  togglePersonHandle= ()=>
  {
      const doesShow=this.state.showPersons;
      this.setState((prevState,props)=>{
        return{
          showPersons: !doesShow,
          toggleClicked:this.state.toggleClicked + 1
        }
      } );

     
  }

  deletePersonHandler=(personindex)=>
  {
      //const person=this.state.person; dont use this approch it takes pointer
      //const person=this.state.person.slice();//it copies all element person array to const person
       const person=[...this.state.person];//spread operator to copy array elemment
       person.splice(personindex,1);
      this.setState({person:person});
  }
  loginHandler=()=>{
    this.setState({authenticated:true});

  }

  render() 
  {
    console.log('[App.js] in rendor method' );
      let persons=null;
     
      if(this.state.showPersons)
      {
          persons=  <Persons
                     persons={this.state.person}
                     clicked={this.deletePersonHandler}
                     changed={this.nameChangeHandler}
                     />
                   ;
            
      }

 
   
 return(
   
      <div className={myclasses.App}>
         
      <Cockpit showPersons={this.state.showPersons}
      person={this.state.person}
      clicked={this.togglePersonHandle}
      login={this.loginHandler}/>
<AuthContext.Provider value={this.state.authenticated}>
      {persons}
      </AuthContext.Provider>
          
      </div>
     

      //return  React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work now'));
    );
  }
}

export default App;
