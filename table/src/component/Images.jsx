import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <img onLoad={this.props.onImageLoad} src="https://bipbap.ru/wp-content/uploads/2017/09/44_20140925_1955853838.gif" className="img-thumbnail" alt="Toy" />
                <img onLoad={this.props.onImageLoad} src="https://www.sunhome.ru/i/wallpapers/43/novogodnie-kartinki-animaciya.240x320.gif" className="img-thumbnail" alt="Toy" />
                <img onLoad={this.props.onImageLoad} src="https://bestgif.su/_ph/56/2/598465583.gif" className="img-thumbnail" alt="Toy" />
            </div>
        )
    }

}

export default Image;

