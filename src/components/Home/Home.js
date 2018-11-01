import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Overview from "../Overview/Overview";
import Header from "../Header/Header";

class Home extends Component {
	render() {
		return (
			<div>
				<CssBaseline />
				<Header />
				<Overview />
			</div>
		);
	}
}

export default Home;
