import * as React from "react";
import PropTypes from "prop-types";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }
}

App.propTypes = {
    header: PropTypes.string,
    name: PropTypes.string.isRequired
}

App.defaultProps = {
    header: "Header"
}