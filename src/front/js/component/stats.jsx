import React from "react";
import { Graph } from "./graph.jsx";

export const Stats = () => {
	return (
		<div>
			<Graph />
			<div>
				<button>Day</button>
				<button>Week</button>
				<button>Month</button>
				<button>Year</button>
			</div>
		</div>
	);
};
