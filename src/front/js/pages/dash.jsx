import React from "react";
import { HeaderMobile } from "../component/header_mobile.jsx";
import { MobileNav } from "../component/mobile_nav.jsx";
import { DesktopNav } from "../component/desktop_nav.jsx";
import "../../styles/dash.scss";

export const Dash = () => {
	const [sidenav, setSideNav] = React.useState(false);

	const toggleNav = () => {
		setSideNav(!sidenav);
	};

	return (
		<div>
			<HeaderMobile toggleNav={toggleNav} />
			{sidenav ? <MobileNav /> : null}
			<div className="mobile-container" />
			<div className="desktop-container">
				<DesktopNav />
				<div className="rightside">
					<div className="title">
						<div>
							<p>David Gomez</p>
							<span>ggh Tech</span>
						</div>
						<figure>
							<img src="https://gghtec.com/wp-content/uploads/2021/12/ProfHiid.png" alt="" />
						</figure>
					</div>
					<div className="main-container" />
				</div>
			</div>
		</div>
	);
};
