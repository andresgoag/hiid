import React from "react";
import { PropTypes } from "prop-types";

export const CardFront = props => {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.last}</p>
			<p>{props.title}</p>
			<p>{props.company}</p>
		</div>
	);
};

CardFront.propTypes = {
	name: PropTypes.string,
	last: PropTypes.string,
	title: PropTypes.string,
	company: PropTypes.string
};
