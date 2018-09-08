import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Filter from "../Filter/Filter";

const styles = {
	root: {
		minHeight: "100%"
	},
	toolb: {
		display: "flex",
		flexDirection: "column"
	},
	header: {
		alignSelf: "stretch",
		textAlign: "center",
		margin: "20px 10px 5px",
		padding: "5px"
	},
	filterWrap: {
		display: "flex",
		justifyContent: "space-around",
		alignSelf: "stretch",
		margin: "10px",
		padding: "5px"
	}
};
class Header extends Component {
	constructor() {
		super();
		this.state = {
			months: [
				{ month: "January", monthNum: 1 },
				{ month: "February", monthNum: 2 },
				{ month: "March", monthNum: 3 },
				{ month: "April", monthNum: 4 },
				{ month: "May", monthNum: 5 },
				{ month: "June", monthNum: 6 },
				{ month: "July", monthNum: 7 },
				{ month: "August", monthNum: 8 },
				{ month: "September", monthNum: 9 },
				{ month: "October", monthNum: 10 },
				{ month: "November", monthNum: 11 },
				{ month: "December", monthNum: 12 }
			],
			years: [
				{ year: 2012 },
				{ year: 2013 },
				{ year: 2014 },
				{ year: 2015 },
				{ year: 2016 },
				{ year: 2017 },
				{ year: 2018 },
				{ year: 2019 }
			]
		};
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Toolbar className={classes.toolb}>
						<Typography
							className={classes.header}
							variant="title"
							color="inherit"
						>
							Overzicht
						</Typography>
						<div className={classes.filterWrap}>
							<Filter
								filterItems={this.state.months}
								filterId="filter-months"
								filterLabel="Month"
							/>
							<Filter
								filterItems={this.state.years}
								filterId="filter-years"
								filterLabel="Year"
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
