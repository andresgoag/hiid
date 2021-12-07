import React from "react";
import { PropTypes } from "prop-types";

export const OtherLink = props => {
	return (
		<div className="other-link" onClick={() => window.open(props.link, "_blank")}>
			<i className={props.icon} />
			<p>{props.name}</p>
			<button className="button-save-contact">{props.button}</button>
		</div>
	);
};

OtherLink.propTypes = {
	link: PropTypes.string,
	icon: PropTypes.string,
	name: PropTypes.string,
	button: PropTypes.string
};
