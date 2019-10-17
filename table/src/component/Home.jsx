import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import nextId from "react-id-generator";
import './css/Home.css';

const images = [
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
  arrows: true,

}

class Home extends Component {
  render() {
    let id = nextId();
    const slides = images.map((image) => {
      return <div key={id} className="each-slide">
        <div style={{ 'backgroundImage': `url(${image})` }}></div>
      </div>
    })

    return (
      <Slide {...properties}>
        {slides}
      </Slide>

    )
  }
}
export default Home;

















