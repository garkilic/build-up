import React from "react";
import Home from "./components/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Signup from "./components/Signup";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}>
					<Home />
				</Route>

				<Route path="/signup" component={Signup}>
					<Signup />
				</Route>
			</Switch>
		</Router>
	);
}
