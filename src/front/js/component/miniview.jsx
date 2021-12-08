import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export const MiniView = props => {
	const saveRoute = `${process.env.BACKEND_URL}/get_contact?name=${props.name}&last_name=${props.last_name}&company=${
		props.company
	}&job_title=${props.job_title}&email=${props.email}&phone=${props.phone}&website=${props.website}`;
	return (
		<div className="miniview">
			<figure>
				<img src="https://gghtec.com/wp-content/uploads/2021/11/CompanyLogoHiid.png" alt="" />
			</figure>
			<div className="miniview-content">
				<p className="miniview-job-title">{props.job_title}</p>
				<p className="miniview-name">
					{props.name} <span>{props.last_name}</span>
				</p>
				<p className="miniview-description">{props.description}</p>
				<div className="miniview-actions">
					<Link to={`/${props.username}`}>
						<button className="primary-button">View more</button>
					</Link>
					<a href={saveRoute} target="_blank" className="button-save-contact" rel="noopener noreferrer">
						Add to contacts
					</a>
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
	username: PropTypes.string,
	company: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	website: PropTypes.string
};
