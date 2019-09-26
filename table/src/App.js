import React, { Component } from 'react'
import Table from './component/Table';
import Menu from './component/Menu';
import Home from './component/Home';
import Notes from './component/Notes';

import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import  Geallary  from './component/Geallary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu/>
          <Route  path='/Home'component={Home}/>
          <Route path='/Table'component={Table}/>
          <Route path='/Notes'component={Notes}/>
          <Route path='/Geallary' component={Geallary}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;