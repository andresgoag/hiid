import React from "react";
import { Info } from "../component/info.jsx";
import { Landing } from "./landing.jsx";
import { Stats } from "../component/stats.jsx";
import "../../styles/dashboard.scss";

export const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="w50 info">
				<Info />
				<div>
					<p>Card Analytics</p>
					<Stats />
				</div>
			</div>
			<div className="w50">
				<Landing />
				<div>
					<button>
						<i className="fas fa-qrcode" />
						Share
					</button>
				</div>
			</div>
		</div>
	);
};
