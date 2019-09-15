import React, { Component } from 'react';


 function InputBunner(props){
    if(!props.type){
         return null;
    }
    return(
         <input type="text"></input>
    );
 }

class Notes extends Component{
    state = {showInput :false, todos:[]}
        onInputClick =(event) =>{
            this. setState(
            {showInput:!this.showInput},
            ) 
        }
  
    save=(event) =>{
    var todos = [...this.state.todos];
    todos.push(this.newText.value);
    this.setState({todos});
    }
   
    render() {
       return (
        <div>
           <butoon className="btn btn-primary m-2" {this.state.showInput}  ? onClick = {this. onInputClick} : onClick = {this. save}> Add not</button>
           <InputBunner id={this.state.showInput}/>
            <ul>
                {this.state.todos.map(function(todo) {
                    return <li>{todo}</li>
                 })}
            </ul>
        </div>
      )
            }
        }
        
export default Notes;