import React from "react";
import { PropTypes } from "prop-types";
import { Social } from "./social.jsx";
import { Context } from "../store/appContext";
import { socialArray } from "../utils/userModel.js";

export const SocialGroup = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<div>
			{socialArray.map((item, index) => {
				if (store.userModel[item[0]] != "") {
					<Social link={store.userModel[item[0]]} icon={item[1]} />;
				}
			})}
		</div>
	);
};
