import React from "react";
import { Line } from "react-chartjs-2";

export const Graph = () => {
	// data.day

	const [data, setData] = React.useState({
		x: ["01012021", "01012021", "01012021", "01012021", "01012021"],
		y: [100, 200, 150, 200, 500]
	});

	const grapchData = {
		labels: data.x,
		datasets: [
			{
				label: "Visits",
				data: data.y,
				pointRadius: 5,
				pointHitRadius: 20,
				pointHoverRadius: 7,
				pointBackgroundColor: "#9cd69c"
			}
		]
	};

	const graphOptions = {
		layout: {
			padding: 10
		},
		plugins: {
			legend: {
				display: false
			}
		},
		elements: {
			line: {
				borderColor: "#9cd69c",
				borderWidth: 3,
				tension: 0.2,
				fill: true,
				backgroundColor: "rgba(154, 216, 154, 0.5)"
			}
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					padding: 10,
					color: "#aaaaaa",
					font: {
						size: 13
					}
				},
				grid: {
					display: false
				}
			},
			x: {
				ticks: {
					padding: 10,
					color: "#aaaaaa",
					font: {
						size: 13
					}
				}
			}
		}
	};

	return <Line data={grapchData} options={graphOptions} />;
};
