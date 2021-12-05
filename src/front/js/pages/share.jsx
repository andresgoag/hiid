import React from "react";
import { Context } from "../store/appContext";
import "../../styles/share.scss";

import qrcode from "../../../../qr.png";

export const Share = () => {
	const { store } = React.useContext(Context);

	return (
		<div className="share-container">
			<div>
				<figure>
					<img src={qrcode} />
				</figure>
				<button
					className="primary-button"
					onClick={() => {
						navigator.clipboard.writeText(store.userModel.username);
						alert("Link copied");
					}}>
					Copy business card link
				</button>
			</div>
		</div>
	);
};
