import React, { Component } from 'react';
import "./css/Menu.css"
import Table from './Table'

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
                    <ul>
                        {this.renderMenuTab()}
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Menu;