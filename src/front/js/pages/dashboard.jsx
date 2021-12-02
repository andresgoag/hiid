import React from "react";
import { Info } from "../component/info.jsx";
import { Preview } from "../component/preview.jsx";
import { Stats } from "../component/stats.jsx";
import { Context } from "../store/appContext";
import "../../styles/dashboard.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const Dashboard = props => {
	const { store, actions } = React.useContext(Context);
	const history = useHistory();

	const getQr = () => {
		fetch(`${process.env.BACKEND_URL}/get_qr`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: store.userModel.username })
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(data => {
				if (data.message == "ok") {
					history.push("/share");
				}
			})
			.catch(error => console.error("Error:", error));
	};

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
				<Preview />
				<div>
					<button onClick={getQr}>
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
