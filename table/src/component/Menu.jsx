import React, { Component } from 'react';
import "./css/Menu.css"

class Menu extends Component {
    state = {
        links: [
            { href: "./Home", label: "Home" },
            { href: "./Notes", label: "Notes" },
            { href: "./Table", label: "Data" },
            { href: "./Geallary", label: "Geallary" }
        ]
    }
    renderMenuTab() {
        return this.state.links.map((links) => {
            const { href, label } = links;
            return (
                <li className="li">
                    <a href={href}>{label}</a>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <nav id="nav">
                    <h5>
                        <img src="http://www.sathyasai.org/sites/default/files/respimg/0/9/pages/organisation/logo/ssio-logo-english.png" alt="Spain" />
                        Spain Travel
                </h5>
                    <ul>
                        {this.renderMenuTab()}
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Menu;