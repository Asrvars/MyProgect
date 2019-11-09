import React, { Component } from 'react';
import './css/Geallary.css';
import { IoIosAdd } from "react-icons/io";
import Image from './Image'

class Spinner extends Component {
  render() {
    return (
      <span className="sr-only">Loading...</span>
    )
  }
}

class Geallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      isFatching: true
    }
  }

  handleImageLoaded = () => {
    this.setState({ isFatching: false });
  }

  handleImageErrored = () => {
    this.setState({ isFatching: "failed to load" });
  }

  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])

    });
  }
  render() {
    return (
      <div className="geallarybackground">
        <input type='file' id='file' onChange={this.handleChange}>
        </input>
        <label for='file' id='label' ><IoIosAdd /></label>
        {this.state.isFatching ? <Image /> : <Spinner animation="border" variant="primary" />}
        <img className="img" src={this.state.file} />
      </div>
    );
  }
}



export default Geallary;





