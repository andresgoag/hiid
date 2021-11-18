import React from "react";
import { PropTypes } from "prop-types";

export const CardBack = props => {
	return (
		<div>
			<p>{props.slogan}</p>
		</div>
	);
};

CardBack.propTypes = {
	slogan: PropTypes.string
};
