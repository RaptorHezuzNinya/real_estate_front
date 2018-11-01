import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	},
	table: {
		minWidth: 700
	}
});

class OverviewItem extends Component {
	constructor(props) {
		super(props);
		// const tenant = this.props.tenant;
		const { tenant, classes } = this.props;
	}

	render() {
		// console.log(this.props.tenant);
		return (
			<TableRow key={this.props.tenant.id}>
				{/* <TableCell component="th" scope="row">{row.name}</TableCell> */}
				<TableCell numeric>{this.props.tenant.email}</TableCell>
				<TableCell numeric>{this.props.tenant.iban}</TableCell>
				<TableCell numeric>"unicorn"</TableCell>
				<TableCell numeric>"unicorn"</TableCell>
			</TableRow>
		);
	}
}

OverviewItem.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OverviewItem);
