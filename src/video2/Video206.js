import React, {Component} from "react";
import PropTypes from "prop-types";


class Video206 extends Component {

    render() {
        return <div>
            {this.props.value === 'winter' && <>Video2 - Value 06. Now is {this.props.value}</>}
            {this.props.value === 'spring' && <>Video2 - Value 06. Now is {this.props.value}</>}
            {this.props.value === 'summer' && <>Video2 - Value 06. Now is {this.props.value}</>}
            {this.props.value === 'autumn' && <>Video2 - Value 06. Now is {this.props.value}</>}
        </div>
    }
}

Video206.propTypes = {
    value: PropTypes.string.isRequired
}

export default Video206;