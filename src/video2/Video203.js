import React, {Component} from "react";
import PropTypes from "prop-types";


class Video203 extends Component {

    render() {
        return this.props.value === 'winter' ? (
            <div >Video2 - Value 03. Now is {this.props.value}</div>
        ) : this.props.value === 'spring' ? (
            <div >Video2 - Value 03. Now is {this.props.value}</div>
        ) : this.props.value === 'summer' ? (
            <div >Video2 - Value 03. Now is {this.props.value}</div>
        ) : <div >Video2 - Value 03. Now is {this.props.value}</div>
    }
}

Video203.propTypes = {
    value: PropTypes.string.isRequired
}

export default Video203;