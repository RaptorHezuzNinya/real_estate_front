import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Filter from "../Filter/Filter";

const styles = {
	root: {
		flexGrow: 1,
		display: "flex"
	},
	toolb: {
		justifyContent: "center"
	}
};

function Header(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar className={classes.toolb}>
					<Filter />
					<Typography variant="title" color="inherit">
						Overzicht
					</Typography>
					<Filter />
				</Toolbar>
			</AppBar>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
