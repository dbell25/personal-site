/**
 * @fileoverview Displays home tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import Navbar from './navbar';

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <p>Nothing to Display Yet</p>
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="component">
                    <h1>Home</h1>
                    {this.state.view}
                </div>
            </div>
        );
    }
}