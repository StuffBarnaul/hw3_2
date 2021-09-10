import React, {Component} from "react";
import PropTypes from "prop-types";


class Video205 extends Component {

    render() {
        return <div>
            {this.props.value === 'winter' ? 'Video2 - Value 05. Now is winter' :
                this.props.value === 'spring' ? 'Video2 - Value 05. Now is spring' :
                    this.props.value === 'summer' ? 'Video2 - Value 05. Now is summer' :
                        'Video2 - Value 01. Now is autumn'
            }
        </div>
    }
}

Video205.propTypes = {
    value: PropTypes.string.isRequired
}

export default Video205;