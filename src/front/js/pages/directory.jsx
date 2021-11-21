import React from "react";
import { MiniView } from "../component/miniview.jsx";

export const Directory = () => {
	return (
		<div>
			<p>Find experts in every discipline</p>

			<div>
				<label className="hidden" />
				<div className="input__form">
					<input
						type="string"
						id="zip"
						name="zip"
						placeholder="Try: “engineering”"
						value=""
						required
						onChange=""
					/>
				</div>
				<div className="input__form">
					<input
						type="string"
						id="zip"
						name="zip"
						placeholder="Filter by: Zip code"
						value=""
						required
						onChange=""
					/>
				</div>
				<button>Search</button>
			</div>

			<MiniView />
		</div>
	);
};
