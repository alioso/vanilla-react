import React, { Component } from "react";
import PropTypes from "prop-types";

export class Icon extends Component {
	render() {
		return (
			<svg
				className={this.props.iconClass}
				version="1.1"
				width="15"
				height="16"
				viewBox="0 0 15 16"
			>
				<path d="M15 13l-3.893-3.893c0.556-0.907 0.893-1.964 0.893-3.107 0-3.313-2.688-6-6-6s-6 2.687-6 6c0 3.313 2.687 6 6 6 1.143 0 2.2-0.337 3.107-0.891l3.893 3.891c0.273 0.273 0.727 0.271 1 0l1-1c0.273-0.273 0.273-0.727 0-1zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
			</svg>
		);
	}
}

Icon.propTypes = {
	iconClass: PropTypes.string
};

Icon.defaultProps = {
	iconClass: "c-icon"
};