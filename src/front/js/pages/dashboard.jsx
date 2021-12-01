import React from "react";
import { Info } from "../component/info.jsx";
import { Landing } from "./landing.jsx";
import { Stats } from "../component/stats.jsx";
import { Context } from "../store/appContext";
import "../../styles/dashboard.scss";
import PropTypes from "prop-types";

export const Dashboard = props => {
	const { store, actions } = React.useContext(Context);

	return (
		<div className="dashboard">
			<div className="w50 info">
				<Info />
				<div>
					<p>Card Analytics</p>
					<Stats />
				</div>
			</div>
			<div className="landing-container w50">
				<Landing />
				<div>
					<button
						onClick={() => {
							if (actions.getQr() == "created") {
								props.history.push("/share");
							}
						}}>
						<i className="fas fa-qrcode" />
						Share
					</button>
				</div>
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	history: PropTypes.object
};
