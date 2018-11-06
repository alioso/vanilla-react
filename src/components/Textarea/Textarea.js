import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Textarea extends Component {

    render() {                
        return (
            <textarea placeholder={ this.props.placeholder }></textarea>
        );
    }
}

Textarea.propTypes = {
    placeholder: PropTypes.string
}

Textarea.defaultProps = {
    placeholder: "Placeholder"
};