import React from "react";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";

export const CardFront = props => {
	const { store } = React.useContext(Context);

	const saveToContacts = () => {
		const data = {
			name: store.userModel.name,
			last_name: store.userModel.last_name,
			company: store.userModel.company,
			job_title: store.userModel.job_title,
			email: store.userModel.email,
			phone: store.userModel.phone,
			website: store.userModel.website
		};

		fetch(`${process.env.BACKEND_URL}/get_contact`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
	};

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
				<input type="button" className=" button-outline" value="Save to contacts" onClick={saveToContacts} />
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
