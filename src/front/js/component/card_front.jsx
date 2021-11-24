import React from "react";
import { PropTypes } from "prop-types";

export const CardFront = props => {
	return (
		<div>
			<div className="card-flex">
				<figure className="company-logo">
					<img src="https://gghtec.com/wp-content/uploads/2021/11/CompanyLogoHiid.png" alt="" />
				</figure>
				<div className="card-front">
					<div className="">
						<p className="name-typography">{props.name}</p>
						<p className="last-name-typography">{props.last}</p>
					</div>
					<p className="job-title-typography">{props.title}</p>
					<p className="company-typography">{props.company}</p>
				</div>
			</div>
			<div className="">
				<input type="button" className=" button-outline" value="Save to contacts" />
			</div>
		</div>
	);
};

CardFront.propTypes = {
	name: PropTypes.string,
	last: PropTypes.string,
	title: PropTypes.string,
	company: PropTypes.string
};
