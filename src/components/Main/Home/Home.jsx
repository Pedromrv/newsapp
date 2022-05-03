import React, {Component} from "react";
import {userContext} from "../../../context/userContext";


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: ''
        }
    }

    static contextType = userContext;


    signup = (event) => {
        event.preventDefault();
        const user = event.target.user.value;
        this.setState({user})
        this.context.login(user);

    }


    render() {
        return <div>
            <h2>Home</h2>
            <form onSubmit={this.signup}>
                <input type="text" name="user" placeholder="Usuario"/>
                <button type="submit">Login</button>
            </form>
        </div>;
    }
}

export default Home;