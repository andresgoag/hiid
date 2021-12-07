import React from "react";
import { Social } from "./social.jsx";
import { Context } from "../store/appContext";
import { socialArray } from "../utils/userModel.js";

export const SocialGroup = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<div className="social-group">
			{socialArray.map((item, index) => {
				if (item[0] == "whatsapp" && store.userModel.phone != "") {
					const whatsappUrl = `https://api.whatsapp.com/send?phone=${store.userModel.phone}`;
					return <Social key={`social${index}`} link={whatsappUrl} icon={item[1]} />;
				}

				if (item[0] != "whatsapp" && store.userModel[item[0]] != "") {
					const url = `https://${store.userModel[item[0]]}`;
					return <Social key={`social${index}`} link={url} icon={item[1]} />;
				}
			})}
		</div>
	);
};
