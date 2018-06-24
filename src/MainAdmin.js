import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from './Header/header';

class MainAdmin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            username
        } = this.props;

        return (
            <section>
                <Header username={username}/>
            </section>
        );
    }
}

export default MainAdmin;