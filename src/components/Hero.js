import React from "react";
import exercise from "../img/exercise.png";
import "../style.css";

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
				<a className="signup" href="#">
					Sign Up
				</a>
			</div>

			<div>
				<img className="hero--img" src={exercise} alt="person exercising"></img>
			</div>
		</section>
	);
}
