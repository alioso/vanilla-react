import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as LogoImg } from "../../images/linode-logo.svg";

import "./Logo.scss";

export class Logo extends Component {
	render() {
		return (
			<a
				href={this.props.href}
				className="c-logo"
				rel="home"
				{...this.props}
			>
					<LogoImg className="c-logo__img" />
			</a>
		);
	}
}

Logo.propTypes = {
	href: PropTypes.string,
	logoImg: PropTypes.string,
	alt: PropTypes.string
};
