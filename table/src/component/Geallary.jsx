import React, { Component } from 'react';
import './css/Geallary.css';
import { IoIosAdd } from "react-icons/io";
import Image from './Image'


class Geallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      imaegeStatus: "loading"


    }
  }


  handleImageLoaded = () => {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored = () => {
    this.setState({ imageStatus: "failed to load" });
  }

  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])

    });
  }
  render() {


    return (
      <div>
        <input type='file' id='file' onChange={this.handleChange}>
        </input>
        <label for='file' id='label' ><IoIosAdd /></label>
        <Image

          // src={this.props.src}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}

        />
        {/* {this.state.imageStatus} */}
        <img className="img" src={this.state.file} />
      </div>
    );

  }
}



export default Geallary;





