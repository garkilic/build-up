import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Training from "./Training";
import Footer from "./Footer";
import "../style.css";

export default function Home() {
	return (
		<div>
			<Nav />
			<Hero />
			<About />
			<Training />
			<Footer />
		</div>
	);
}