import React from "react";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";

export const CardFront = props => {
	const { store } = React.useContext(Context);
	const saveRoute = `${process.env.BACKEND_URL}/get_contact?name=${store.userModel.name}&last_name=${
		store.userModel.last_name
	}&company=${store.userModel.company}&job_title=${store.userModel.job_title}&email=${store.userModel.email}&phone=${
		store.userModel.phone
	}&website=${store.userModel.website}`;

	return (
		<div className="card">
			<div className="front-top mb-3">
				<figure className="company-logo">
					<img src="https://gghtec.com/wp-content/uploads/2021/11/CompanyLogoHiid.png" alt="" />
				</figure>
				<div className="card-front">
					<p className="name">{props.name}</p>
					<p className="last-name">{props.last}</p>
					<p className="job-title">{props.title}</p>
					<p className="company">{props.company}</p>
				</div>
			</div>
			<div className="save-contact-container">
				<a href={saveRoute} target="_blank" className="button-save-contact" rel="noopener noreferrer">
					Save to contacts
				</a>
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
