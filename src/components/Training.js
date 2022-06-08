import React from "react";
import "../style.css";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";

const { toggle } = createPopup("Wxu3yEyZ");

export default function Training() {
	return (
		<section className=" training--section container">
			<div className="training--pricing" id="pricing">
				<h2>Early Bird Offering</h2>
				<h3>Price: $75</h3>
				<ul className="training--list">
					<li>6-month workout PDF customized to you.</li>{" "}
					<li>Time and science based workouts that fit your schedule</li>
					<li>No expensive apps or equipment needed.</li>
					<li>No monthly subscriptions.</li>
					<li>Team that cares about you.</li>
				</ul>
				<button className="signup" onClick={toggle}>
					Try Now!
				</button>
			</div>
		</section>
	);
}
