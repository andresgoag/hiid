import React from "react";
import { HeaderMobile } from "../component/header_mobile.jsx";
import { MobileNav } from "../component/mobile_nav.jsx";
import { DesktopNav } from "../component/desktop_nav.jsx";
import { Stats } from "../component/stats.jsx";
import { Context } from "../store/appContext";
import "../../styles/navigation.scss";
import "../../styles/newDashboard.scss";

import qrcode from "../../../../qr.png";

export const NewDashboard = () => {
	const { store } = React.useContext(Context);

	const [sidenav, setSideNav] = React.useState(false);
	const [qrReady, setQrReady] = React.useState(false);

	React.useEffect(() => {
		fetch(`${process.env.BACKEND_URL}/get_qr`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: store.userModel.username })
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(data => {
				if (data.message == "ok") {
					setQrReady(true);
				}
			})
			.catch(error => console.error("Error:", error));
	}, []);

	const toggleNav = () => {
		setSideNav(!sidenav);
	};

	return (
		<div>
			<HeaderMobile toggleNav={toggleNav} />
			{sidenav ? <MobileNav /> : null}
			<div className="mobile-container">
				<p className="dashboard-title">Welcome {store.userModel.name}!</p>
				<div className="qrContainer main__content">
					<p className="main__content-title">Your QR code</p>
					<div className="main__content-content">
						<figure>{qrReady ? <img src={qrcode} alt="" /> : null}</figure>
						<button className="primary-button">View share options</button>
					</div>
				</div>

				<div className="main__content">
					<p className="main__content-title">Card Analytics</p>
					<div className="main__content-content">
						<Stats />
					</div>
				</div>

				<div className="landing-button">
					<button className="primary-button">View my Hiid</button>
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
						<p className="dashboard-title">Welcome {store.userModel.name}!</p>
						<div className="dashboard-main-container">
							<div className="qrContainer main__content">
								<p className="main__content-title">Your QR code</p>
								<div className="main__content-content">
									<figure>{qrReady ? <img src={qrcode} alt="" /> : null}</figure>
									<button className="primary-button">View share options</button>
								</div>
							</div>

							<div className="main__content">
								<p className="main__content-title">Card Analytics</p>
								<div className="main__content-content">
									<Stats />
								</div>
							</div>
						</div>

						<div className="landing-button">
							<button className="primary-button">View my Hiid</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
