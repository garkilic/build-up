import React from "react";
import "../style.css";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";

const { toggle } = createPopup("<nuT2Tr4W>");

export default function Nav() {
	return (
		<header className="container container--flex">
			<div className="navbar">
				<div>
					<h2 className="navbar--title">Build Up</h2>
				</div>
				<nav>
					<ul className="navbar--items">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#pricing">Pricing</a>
						</li>
						<li>
							<a
								href="mailto:tryagainlabs@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Contact
							</a>
						</li>
						<li>
							<a className="navbar--signup" onClick={toggle} href="#">
								Sign Up
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
