import React, { Component } from 'react'
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

import Table from './component/Table';
import Menu from './component/Menu';
import Home from './component/Home';
import Notes from './component/Notes';
import General from'./component/General'
import  Geallary  from './component/Gallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu/>
          <Route  exact path='/'component={General}/>
          <Route path='/Home'component={Home}/>
          <Route path='/Table'component={Table}/>
          <Route path='/Notes'component={Notes}/>
          <Route path='/Geallary' component={Geallary}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;