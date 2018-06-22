import React,{ Component } from 'react';
import Person from './Person/Person';



class Persons extends Component{
  
    constructor(props){
        //can only access props directly...
        super(props);
      console.log('[Persons.js]--> ',props.title);
      }
      componentWillMount(){
        console.log('[Persons.js] Inside component will mount');
     }
      componentDidMount(){
        console.log('[Persons.js] Inside Component did mound');
      }
    render(){
      console.log('[Persons.js] Inside render');
        return this.props.persons.map((person,index) => {
            return<Person 
                 name={person.name} 
                 age={person.age}
                 position={index}
                 click={()=>this.props.clicked(index)}
                 key={person.id}
                 changed={(event)=>this.props.changed(event,person.id)}
                 />  
           })
    }
}
   
export default Persons;