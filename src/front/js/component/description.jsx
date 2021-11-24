import React from "react";
import { PropTypes } from "prop-types";

export const Description = props => {
	return (
		<div>
			<h3>Description</h3>
			<p className="last-name-typography">{props.description}</p>
		</div>
	);
};

Description.propTypes = {
	description: PropTypes.string
};
