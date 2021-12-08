import React from "react";
import { HeaderMobile } from "../component/header_mobile.jsx";
import { MobileNav } from "../component/mobile_nav.jsx";
import { DesktopNav } from "../component/desktop_nav.jsx";
import { Context } from "../store/appContext";
import qrcode from "../../../../qr.png";
import "../../styles/navigation.scss";
import "../../styles/share.scss";

export const Share = () => {
	const { store } = React.useContext(Context);

	const [sidenav, setSideNav] = React.useState(false);

	const toggleNav = () => {
		setSideNav(!sidenav);
	};

	return (
		<div>
			<HeaderMobile toggleNav={toggleNav} />
			{sidenav ? <MobileNav /> : null}
			<div className="mobile-container">
				<div className="share-container">
					<figure>
						<img src={qrcode} />
					</figure>
					<button
						className="primary-button"
						onClick={() => {
							navigator.clipboard.writeText(store.userModel.username);
							alert("Link copied");
						}}>
						Copy business card link
					</button>
				</div>
			</div>
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
						<div className="share-container">
							<figure>
								<img src={qrcode} />
							</figure>
							<button
								className="primary-button"
								onClick={() => {
									navigator.clipboard.writeText(store.userModel.username);
									alert("Link copied");
								}}>
								Copy business card link
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
