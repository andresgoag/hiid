import React from "react";
import { Graph } from "./graph.jsx";
import "../../styles/stats.scss";

export const Stats = () => {
	return (
		<div className="stats-container">
			<div className="graph-container">
				<Graph />
			</div>
			<div className="graph-filter">
				<button className="primary-button">Day</button>
				<button className="primary-button">Week</button>
				<button className="primary-button">Month</button>
				<button className="primary-button">Year</button>
			</div>
		</div>
	);
};
