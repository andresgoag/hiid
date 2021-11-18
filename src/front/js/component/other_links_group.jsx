import React from "react";
import { OtherLink } from "./other_link.jsx";
import { Context } from "../store/appContext";
import { otherLinksArray } from "../utils/userModel.js";

export const OtherLinksGroup = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<div>
			{otherLinksArray.map((item, index) => {
				return (
					<OtherLink
						key={`OtherLink${index}`}
						link={store.userModel[item[0]]}
						icon={item[1]}
						name={item[0]}
						button={item[2]}
					/>
				);
			})}
		</div>
	);
};
