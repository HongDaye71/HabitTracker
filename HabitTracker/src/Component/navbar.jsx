import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <FontAwesomeIcon icon={faLeaf} />
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </div>
        );
    }
}

export default Navbar;