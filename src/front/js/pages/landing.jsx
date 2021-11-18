import React from "react";
import { CardFront } from "../component/card_front.jsx";
import { CardBack } from "../component/card_back.jsx";
import { Description } from "../component/description.jsx";

export const Landing = () => {
	return (
		<div>
			<CardFront name="David Alberto" last="Gomez Agudelo" title="Web developer" />
			<CardBack slogan="Business Slogan" />
			<Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
		</div>
	);
};
