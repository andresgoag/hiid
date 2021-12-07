import React from "react";
import { Context } from "../store/appContext";
import { CardFront } from "../component/card_front.jsx";
import { CardBack } from "../component/card_back.jsx";
import { Description } from "../component/description.jsx";
import { SocialGroup } from "../component/social_group.jsx";
import { OtherLinksGroup } from "../component/other_links_group.jsx";

export const Preview = () => {
	const { store } = React.useContext(Context);

	return (
		<div className="bussiness">
			<div className="landing-container">
				<figure className="header-logo">
					<img src="https://m-lp.com/wp-content/uploads/2021/11/Hiidlogo.png" alt="" />
				</figure>
				<div className="card-main">
					<CardFront
						name={store.userModel.name}
						last={store.userModel.last_name}
						title={store.userModel.job_title}
						company={store.userModel.company}
					/>
					<CardBack slogan={store.userModel.slogan} />
				</div>
				<div className="description">
					<Description description={store.userModel.description} />
				</div>
				<SocialGroup />
				<OtherLinksGroup />
			</div>
		</div>
	);
};
