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
		<div>
			<div>
				<div className="card-flex-main">
					<div className="card w50">
						<CardFront
							name={store.userModel.name}
							last={store.userModel.last_name}
							title={store.userModel.job_title}
							company={store.userModel.company}
						/>
					</div>
					<div className="card w50">
						<CardBack slogan={store.userModel.slogan} />
					</div>
				</div>
				<div className="description">
					<Description description={store.userModel.description} />
				</div>
				<div>
					<SocialGroup />
				</div>
				<div>
					<OtherLinksGroup />
				</div>
			</div>
		</div>
	);
};
