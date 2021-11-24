import React from "react";
import { PropTypes } from "prop-types";

export const CardBack = props => {
	return (
		// <div>
		// 	<p>{props.slogan}</p>
		// </div>

		<div className="center-v-h">
			<figure className="company-logo-back">
				<img src="https://gghtec.com/wp-content/uploads/2021/11/CompanyLogoHiid.png" alt="" />
			</figure>
			<div className="">
				<p className="last-name-typography">{props.slogan}</p>
			</div>
		</div>
	);
};

CardBack.propTypes = {
	slogan: PropTypes.string
};
