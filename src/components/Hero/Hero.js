import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as HeroImage } from "../../images/hero.svg";

import "./Hero.scss";
import { Button } from "../Button/Button";

export class Hero extends Component {
	render() {
		return (
			<div className="c-hero" {...this.props}>
				<HeroImage className="c-hero__img" />
				<div className="c-hero__body">
					<h1 className="c-hero__title">{this.props.title}</h1>
					<h2 className="c-hero__description">
						{this.props.description}
					</h2>
					<Button text="Sign Up" />
				</div>
			</div>
		);
	}
}

Hero.propTypes = {
	imgsrc: PropTypes.string.isRequired,
	imgalt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string
};

Hero.defaultProps = {
	imgsrc: "../../images/fpo-1200x650.png",
	title: "Cloud Hosting for You.",
	description: "High performance SSD Linux servers for all of your infrastructure needs."
};
