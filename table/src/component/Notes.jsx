import React, { Component } from 'react';

class TodoNote extends Component {
    createTasks(note) {
      return <li key={note.key}>{note.text}</li>
    }
   
    render() {
      var todoEntries = this.props.entries;
      var listNotes = todoEntries.map(this.createTasks);
   
      return (
        <ul>
            {listNotes}
        </ul>
      );
    }
  };


 

class Notes extends Component{
    state={
        showInput: false,
        showNote: false,
        note: [],
    }
    
    onInputClick=() => {
        if (this.state.showInput) {
            this.setState(
                { showNote: !this.state.showNote }
            )
        } 
        else if (!this.state.showInput && this.state.showNote) {
            this.setState(
                { showNote: !this.state.showNote }
            )
        }

        
            this.setState(
              { showInput: !this.state.showInput }
            )
    }
  
    save=(e)=> {
        if (this._inputElement.value !== "") {
            var newNote = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                note: prevState.note.concat(newNote) 
              };
            });
           
            this._inputElement.value = "";
          }
           
         
             
          e.preventDefault();
        }
  
       
    render() {
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.save}>
                    {this.state.showInput ?<input  ref={(a) => {this._inputElement = a}}  />:null}
                <button className="btn btn-primary m-2" onClick={this.onInputClick} >Add</button>
               
                
​            
                </form>
                </div>
                  
                <TodoNote entries={this.state.note}/>
                
            </div>
        )
    }
}


       
        
        

export default Notes;

