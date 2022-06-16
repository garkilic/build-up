import React from "react";
import "../style.css";

export default function PriceComparison({ pricing }) {
	return (
		<div>
			{pricing.map((pricing) => (
				<div id="pricing" key={pricing.id}>
					<div className="pricing--comparison">
						<div className="pricing--styling preferred">
							<h2>{pricing.title1}</h2>
							<ul>
								<li>{pricing.totalPrice1}</li>
								<li>{pricing.successRate1}</li>
								<li>{pricing.followUp1}</li>
								<li>{pricing.value1}</li>
							</ul>
						</div>
						<div className="pricing--styling unpreferred columns">
							<h2>{pricing.title2}</h2>
							<ul>
								<li>{pricing.totalPrice2}</li>
								<li>{pricing.successRate2}</li>
								<li>{pricing.followUp2}</li>
								<li>{pricing.value2}</li>
							</ul>
						</div>
						<div className="pricing--styling unpreferred">
							<h2>{pricing.title3}</h2>
							<ul>
								<li>{pricing.totalPrice3}</li>
								<li>{pricing.successRate3}</li>
								<li>{pricing.followUp3}</li>
								<li>{pricing.value3}</li>
							</ul>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
