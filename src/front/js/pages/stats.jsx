import React, { useEffect, useState } from "react";

import { Bar, Line } from "react-chartjs-2";
import PropTypes from "prop-types";

export const Stats = () => {
	const [data, setData] = useState({
		labels: [1, 2, 3],
		datasets: [
			{
				label: "Visits",
				backgroundColor: "rgba(92,119,254,0.2)",
				borderColor: "rgba(4,35,188,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(92,119,254,0.4)",
				hoverBorderColor: "rgba(4,35,188,1)",
				data: [1, 2, 3]
			}
		]
	});

	return (
		<Bar
			data={data}
			width={100}
			height={200}
			options={{
				maintainAspectRatio: false,
				legend: {
					labels: { fontColor: "black", fontSize: 16 }
				},
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
								fontColor: "black",
								fontSize: 16
							}
						}
					],
					xAxes: [
						{
							ticks: {
								fontColor: "black",
								stepSize: 1,
								beginAtZero: true,
								fontSize: 16
							}
						}
					]
				}
			}}
		/>
	);
};
