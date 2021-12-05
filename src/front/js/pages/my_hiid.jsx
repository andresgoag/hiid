import React from "react";
import { HeaderMobile } from "../component/header_mobile.jsx";
import { MobileNav } from "../component/mobile_nav.jsx";
import { DesktopNav } from "../component/desktop_nav.jsx";
import { Info } from "../component/info.jsx";
import { Preview } from "../component/preview.jsx";
import { Context } from "../store/appContext";
import "../../styles/navigation.scss";

export const MyHiid = () => {
	const { store, actions } = React.useContext(Context);

	const [sidenav, setSideNav] = React.useState(false);

	const toggleNav = () => {
		setSideNav(!sidenav);
	};

	return (
		<div>
			<HeaderMobile toggleNav={toggleNav} />
			{sidenav ? <MobileNav /> : null}
			<div className="mobile-container">hola</div>
			<div className="desktop-container">
				<DesktopNav />
				<div className="rightside">
					<div className="title">
						<div>
							<p>{`${store.userModel.name} ${store.userModel.last_name}`}</p>
							<span>{store.userModel.company}</span>
						</div>
						<figure>
							<img src="https://gghtec.com/wp-content/uploads/2021/12/ProfHiid.png" alt="" />
						</figure>
					</div>
					<div className="main-container">
						<div className="dashboard">
							<div className="w50 info">
								<Info />
							</div>
							<div className="landing-container w50">
								<Preview />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
