import React, { useState } from "react";
import "../style.css";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
import PriceComparison from "./PriceComparison";

const { toggle } = createPopup("Wxu3yEyZ");

export default function Training() {
	const [pricing, setPricing] = useState([
		{
			// Build Up Section
			title1: "Build Up",
			totalPrice1: "75$ single payment",
			successRate1: "Plan built for you",
			followUp1: "Just the basics",
			value1: "Use your plan forever",
			// Personal Trainer Section
			title2: "Personal Trainers",
			totalPrice2: "$500/month",
			successRate2: "Personalized but pricey",
			followUp2: "Complicated",
			value2: "Exercise stops with trainer",
			// Fitness App Section
			title3: "Fitness Apps",
			totalPrice3: "$30/month",
			successRate3: "General plan, not specific",
			followUp3: "Lorem ipsum dolor sit amet",
			value3: "Pay forever or lose plan",
			id: 1,
		},
	]);
	return (
		<section className="container">
			<PriceComparison pricing={pricing} />
			<div className="training--pricing" id="pricing">
				<h2>Early Bird Offering</h2>
				<h3>Price: $75</h3>
				<ul className="training--list">
					<li>3-month workout PDF customized to you.</li>{" "}
					<li>Time and science based workouts that fit your schedule</li>
					<li>No expensive apps or equipment needed.</li>
					<li>No monthly subscriptions.</li>
					<li>Simple Fitness.</li>
				</ul>
				<button className="signup" onClick={toggle}>
					Try Now!
				</button>
			</div>
		</section>
	);
}
