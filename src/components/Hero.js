import React from "react";
import exercise from "../img/exercise.png";
import "../style.css";

import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";

const { toggle } = createPopup("Wxu3yEyZ");

export default function Hero() {
	return (
		<section className=" hero container">
			<div className="hero--text">
				<h1 className="hero--explainer">
					<span>Workout Plans Made Simple.</span> <br />
					<span className="hero--color">Finally.</span>
				</h1>
				<p className="hero--maintext">
					Get a 6-month customized workout plan for just one single payment.
				</p>
				<button className="signup" onClick={toggle}>
					Sign Up
				</button>
			</div>

			<div>
				<img className="hero--img" src={exercise} alt="person exercising"></img>
			</div>
		</section>
	);
}
