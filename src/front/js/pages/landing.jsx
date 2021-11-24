import React from "react";
import { useParams } from "react-router-dom";
import { CardFront } from "../component/card_front.jsx";
import { CardBack } from "../component/card_back.jsx";
import { Description } from "../component/description.jsx";
import { SocialGroup } from "../component/social_group.jsx";
import { OtherLinksGroup } from "../component/other_links_group.jsx";
import { Context } from "../store/appContext";
import "../../styles/landing.scss";

export const Landing = () => {
	const { store, actions } = React.useContext(Context);
	const params = useParams();

	return (
		<div>
			<p>{params.username}</p>
			<div>
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
				<div>
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
