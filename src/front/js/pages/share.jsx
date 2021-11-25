import React from "react";

import qrcode from "../../../../qr.png";

export const Share = () => {
	return (
		<div>
			<img src={qrcode} />
			<button>Copy business card link</button>
		</div>
	);
};
