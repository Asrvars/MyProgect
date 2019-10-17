// import React, { Component } from 'react';
// import "./css/Note.css";

// class Notes extends Component{
//   state={
//     showInput:false,
//     todos:[],
//     ctodo:""
//   }

//  onAddtodo = () =>{
//     if (this.state.showInput){
//       this.setState(
//           { showInput:!this.state.showInput }
//       )
//   } 

//     else if (!this.state.showInput && !this.state.showNote ) {
//       let c=this.state.todos.slice();
//      c.push(this.state.ctodo);
//       this.setState({
//         showInput: true,
//        todos:c,
//         ctodo:""
//       })
//     }
//    else{
//     this.setState(
//       { showInput: !this.state.showInput,
//         ctodo:""}
//     )
//   }
// }

//   save=(e) =>{
//     this.setState({
//       ctodo:e.target.value
//     });
//   }
//   render(){
//     let b = this.state.todos.map((e,i) =>{
//       return(
//         <li key={i}>{e}</li>
//       );
//   });

//   return(
//     <div className='container' id='cont1'>
//       <center>
//         <div className='col-md-10'>
//           {this.state.showInput && <input type="text" value={this.state.ctodo} onChange={this.save}/>}
//           <button  class="btn btn-secondary"onClick={this.addtodo}>Add</button>
//         </div>
//       </center>
//         <ul>{b} </ul>
//     </div>
//     ) 
//   }
// }






// export default Notes;

import React, { Component } from 'react';
import "./css/Note.css";

class Notes extends Component {
  state = {
    showInput: false,
    todos: [],
    todo: ""
  }

  onAddtodo = () => {
    const { showInput, todos, todo } = this.state;
    const todosArr = todos.slice();
    todosArr.push(todo);
    this.setState({
      showInput: !showInput,
      todos: showInput ? todosArr : todos,
      todo: ''
    })
  }

  onInputChange = (e) => {
    this.setState({
      todo: e.target.value
    });
  };

  render() {
    const todosList = this.state.todos.map((e, i) => {
      return (
        <li key={i}>{e}</li>
      );
    });

    return (
      <div className='container' id='cont1'>
        <center>
          <div className='col-md-10'>
            {this.state.showInput && <input type="text" value={this.state.todo} onChange={this.onInputChange} />}
            <button className="btn btn-secondary" onClick={this.onAddtodo}>Add</button>
          </div>
        </center>
        <ul>{todosList}</ul>
      </div>
    )
  }
}

export default Notes;
