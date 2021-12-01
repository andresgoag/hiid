import React from "react";
import { PropTypes } from "prop-types";

export const CardBack = props => {
	return (
		// <div>
		// 	<p>{props.slogan}</p>
		// </div>

		<div className="center-v">
			<div className="">
				<figure className="company-logo-back gap-t-20">
					<img src="https://gghtec.com/wp-content/uploads/2021/11/CompanyLogoHiid.png" alt="" />
				</figure>
				<div className="company-logo-back gap-t-20">
					<p className="last-name-typography custom-p">{props.slogan}</p>
				</div>
			</div>
		</div>
	);
};

CardBack.propTypes = {
	slogan: PropTypes.string
};
