import React from "react";
import { OtherLink } from "./other_link.jsx";
import { Context } from "../store/appContext";
import { otherLinksArray } from "../utils/userModel.js";

export const OtherLinksGroup = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<div className="other-link-group">
			{otherLinksArray.map((item, index) => {
				if (store.userModel[item[0]] != "") {
					return (
						<OtherLink
							key={`OtherLink${index}`}
							link={item[0] == "email" ? `mailto: ${store.userModel[item[0]]}` : store.userModel[item[0]]}
							icon={item[1]}
							name={item[0]}
							button={item[2]}
						/>
					);
				}
			})}
		</div>
	);
};
