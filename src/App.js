import Users from "./components/cards";
import "./App.css";
import image from "./logo1.jpeg";
import React, { Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = { users_data: [], loading: false };

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState({ loading: true });

        setTimeout(
            async function() {
                const response = await fetch("https://reqres.in/api/users?page=1");
                const jsonresponse = await response.json();
                console.log(jsonresponse);
                this.setState({ users_data: jsonresponse["data"], loading: false });
            }.bind(this),
            2000
        );
    }

    render() {
        return ( <
            >
            <
            nav className = "navbar" >
            <
            div className = "navitems" >
            <
            img src = { image }
            alt = "Loading..." / >
            <
            button className = "fetchbtn"
            onClick = { this.updateState } >
            Get Users <
            /button> < /
            div > <
            /nav> <
            div className = "userdatacontainer" >
            <
            Users loading = { this.state.loading }
            users = { this.state.users_data }
            /> < /
            div > <
            div className = "my-footer" >
            <
            footer className = "footer" > Developed by Vinayak singh copuright by @vinayak singh <
            /footer>  <
            / div > < /
            >
        );
    }
}

export default App;