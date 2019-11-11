import React, { Component } from 'react';
import './css/Geallary.css';
import { IoIosAdd } from "react-icons/io";
import Images from './Images';

class Spinner extends Component {
  render() {
    return (
      <span>Loading...</span>
    )
  }
}

class Geallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      isFetching: true
    }
    this.loadedImages = 0;
  }

  handleImageLoaded = () => {
    this.loadedImages++;
    if (this.loadedImages === 3) 
      setTimeout(this.setState({ isFetching: false }), 5000);
  }

  handleImageErrored = () => {
    this.setState({ isFetching: "failed to load" });
  }

  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])

    });
  }
  render() {
    return (
      <div className="geallarybackground">
        <input type='file' id='file' onChange={this.handleChange} />
        <label for='file' id='label' ><IoIosAdd /></label>
        <Images className={this.state.isFetching ? 'hidden' : 'visible'} onImageLoad={this.handleImageLoaded} />
        {this.state.isFetching && <Spinner animation="border" variant="primary" />}
        {this.state.file && <img className="img" src={this.state.file} />}
      </div>
    );
  }
}



export default Geallary;





