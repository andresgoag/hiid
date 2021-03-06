import React from "react";
import { PropTypes } from "prop-types";

export const CardBack = props => {
	return (
		// <div>
		// 	<p>{props.slogan}</p>
		// </div>

		<div className="card">
			<figure className="company-logo mb-3">
				<img src="https://gghtec.com/wp-content/uploads/2021/11/CompanyLogoHiid.png" alt="" />
			</figure>
			<div>
				<p className="last-name-typography custom-p">{props.slogan}</p>
			</div>
		</div>
	);
};

CardBack.propTypes = {
	slogan: PropTypes.string
};
