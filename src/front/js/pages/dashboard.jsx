import React from "react";
import { Info } from "../component/info.jsx";
import { Landing } from "./landing.jsx";
export const Dashboard = () => {
	return (
		<div>
			<div className="w50">
				<Info />
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
