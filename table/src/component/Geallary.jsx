import React, { Component } from 'react';
import './Geallary.css';
import { IoIosAdd } from "react-icons/io";

class Geallary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <img src="https://bipbap.ru/wp-content/uploads/2017/09/44_20140925_1955853838.gif" className="img-thumbnail" />
        <img src="https://www.sunhome.ru/i/wallpapers/43/novogodnie-kartinki-animaciya.240x320.gif" className="img-thumbnail" /> 
        <img src="https://bestgif.su/_ph/56/2/598465583.gif" className="img-thumbnail" />        
        <input type='file' id='file' onChange={this.handleChange} />
        <label for='file' ><IoIosAdd /></label>
        <img src={this.state.file} />
      </div>
    );
  }
}
export default Geallary;
