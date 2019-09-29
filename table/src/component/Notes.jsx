import React, { Component } from 'react';


 

class Notes extends Component{
    state={
        showInput: false,
        showNote: false,
        note: '',
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
  
    save=(event) =>{
        this.setState({ note: event.target.value });

    
    }
   
    render() {
        return (
        <div>
            <button className="btn btn-primary m-2" onClick={this.onInputClick}> Add not</button>
            {this.state.showInput ? <input type="text" onChange={this.save} /> : null}
​            {this.state.showNote ?
                <ul>
                    <li>{this.state.note}</li>
                </ul> : null}
        </div>
        )
    }
}
        
export default Notes;

