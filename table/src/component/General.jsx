import React, { Component } from 'react';
import "./css/General.css"
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

class General extends Component {
    render() {
        return (
            <div >
                <div className="mainBackground" >
                    <div class="text">
                        <h3>Our Earth is amazing with stories!
                            <p className="position">
                                <button className="button">
                                    <FaTwitter style={{ fontSize: '25px' }} />
                                </button>
                                <button className="button">
                                    <IoLogoFacebook style={{ fontSize: '25px' }} />
                                </button>
                                <button className="button">
                                    <FaInstagram style={{ fontSize: '25px' }} />
                                </button>
                            </p> </h3>
                        <h4>Capital and largest city Madrid</h4>
                        <h4>Official language and national language	Spanish</h4>
                        <h4>Ethnic groups 89.67% Spaniards 10.33% others</h4>
                    </div>
                </div>
            </div>

        )
    }
}

export default General;