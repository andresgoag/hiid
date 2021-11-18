import React from "react";
import { PropTypes } from "prop-types";

export const Social = props => {
	return (
		<a onClick={() => window.open(props.link, "_blank")}>
			<i className={props.icon} />
		</a>
	);
};

Social.propTypes = {
	link: PropTypes.string,
	icon: PropTypes.string
};

// onClick={()=> window.open(props.link, "_blank")}
