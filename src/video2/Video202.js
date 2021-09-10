import React, {Component} from "react";
import PropTypes from "prop-types";


class Video202 extends Component {

    render() {
        switch (this.props.value) {
            case 'winter': return <div >Video2 - Value 02. Now is {this.props.value}</div>
            case 'spring': return <div >Video2 - Value 02. Now is {this.props.value}</div>
            case 'summer': return <div >Video2 - Value 02. Now is {this.props.value}</div>
            default: return <div >Video2 - Value 02. Now is {this.props.value}</div>
        }
    }
}

Video202.propTypes = {
    value: PropTypes.string.isRequired
}

export default Video202;