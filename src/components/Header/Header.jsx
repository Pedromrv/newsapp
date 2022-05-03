import React, {Component} from "react";
import Nav from "./Nav/Nav";
import {userContext} from "../../context/userContext";

export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: ""
        }
    }

    static contextType = userContext;

    render() {
        return <header>
                <Nav/>
                    <userContext.Consumer>
                        {(value) => value.user?
                            <>
                                <p>Hola, {value.user}</p>
                                <button onClick={value.logout}>Logout</button>
                            </>
                            : ""
                        }
                    </userContext.Consumer>
            </header>;
    }
}

export default Header;