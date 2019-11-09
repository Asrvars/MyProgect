import React, { Component } from 'react';
import "./css/General.css"
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

class Foto extends Component {
    render() {
        return (
            <img className='imgGeneral' src="https://c1.staticflickr.com/3/2742/4238132364_d7c081b1e3_b.jpg" />
        )
    }
}
class General extends Component {
    render() {
        return (
            <div className="backgroud">
                < Foto />
                <h1 className="h1">Welcome to Spain!</h1>
                <div className="icon">
                    <div>
                        <FaTwitter style={{ fontSize: '58px' }} />
                        <div>
                            <IoLogoFacebook style={{ fontSize: '58px' }} />
                        </div>
                        <FaInstagram style={{ fontSize: '58px' }} />
                    </div>
                </div>

            </div>


        )
    }
}

export default General;