import React, {Component} from "react";
import PropTypes from "prop-types";


class Video201 extends Component {

    render() {
        if (this.props.value === 'winter') {
            return <div className={"App-link"}>Video2 - Value 01. Now is {this.props.value}</div>
        } else if (this.props.value === 'spring') {
            return <div className={"App-link"}>Video2 - Value 01. Now is {this.props.value}</div>
        } else if (this.props.value === 'summer') {
            return <div className={"App-link"}>Video2 - Value 01. Now is {this.props.value}</div>
        }
        return <div className={"App-link"}>Video2 - Value 01. Now is {this.props.value}</div>
    }
}

Video201.propTypes = {
    value: PropTypes.string.isRequired
}

export default Video201;