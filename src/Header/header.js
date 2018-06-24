import React, {Component} from "react";
import ReactDOM from "react-dom";
import './header.scss'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            username
        } = this.props;

        return (
            <header>
                <h1>Welcome {username}</h1>
                <h2>Your place for Kindergarden management</h2>
            </header>
        );
    }
}

export default Header;