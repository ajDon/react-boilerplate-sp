import * as React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.testJsonAPI();
    }

    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }

    testJsonAPI() {
        Axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => console.info("Response", response.data))
            .catch((error) => console.error("Error", error));
    }
}

App.propTypes = {
    header: PropTypes.string,
    name: PropTypes.string.isRequired
}

App.defaultProps = {
    header: "Header"
}