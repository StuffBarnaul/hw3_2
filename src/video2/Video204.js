import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";


class Video204 extends Component {

    render() {
        return (
            <div>
                {this.props.value === 'winter' ? <Fragment>Video2 - Value 04. Now is {this.props.value}</Fragment> :
                    this.props.value === 'spring' ? <Fragment>Video2 - Value 04. Now is {this.props.value}</Fragment> :
                        this.props.value === 'summer' ?
                            <Fragment>Video2 - Value 04. Now is {this.props.value}</Fragment> :
                            <Fragment>Video2 - Value 04. Now is {this.props.value}</Fragment>
                }
            </div>
        )
    }
}

Video204.propTypes = {
    value: PropTypes.string.isRequired
}

export default Video204;