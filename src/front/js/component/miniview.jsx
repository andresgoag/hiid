import React from "react";
import { PropTypes } from "prop-types";

export const MiniView = props => {
	return (
		<div>
			<figure>
				<img src="https://gghtec.com/wp-content/uploads/2021/11/CompanyLogoHiid.png" alt="" />
			</figure>
			<div>
				<p>{props.job_title}</p>
				<p>
					{props.name} <span>{props.last_name}</span>
				</p>
				<p>{props.description}</p>
				<div>
					<button>Add to contacts</button>
					<button>View more</button>
				</div>
			</div>
		</div>
	);
};

MiniView.propTypes = {
	name: PropTypes.string,
	last_name: PropTypes.string,
	job_title: PropTypes.string,
	description: PropTypes.string,
	username: PropTypes.string
};
