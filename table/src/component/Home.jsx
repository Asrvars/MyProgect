import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import  './css/Home.css';
const slideImages = [
  "https://img2.akspic.ru/image/46291-dikaya_mestnost-ozero-pustynya-boloto-priroda-1920x1080.jpg",
  "https://s1.1zoom.ru/b5050/186/Norway_Mountains_Lake_488324_1920x1080.jpg",
  "http://wallpapers-images.ru/1920x1080/nature/wallpapers/nature-wallpapers-1920x1080-00014.jpg",
  "https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg",
 
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class Home extends Component {
  render(){
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}> </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}> </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}> </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}> </div>
        </div>
      </Slide>
    )
}
}

export default Home

