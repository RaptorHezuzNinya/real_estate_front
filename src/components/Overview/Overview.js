// import React, { Component } from "react";

// class Overview extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			tenants: []
// 		};
// 	}

// 	render() {

// 	}
// }

// export default Overview;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OverviewItem from "./OverviewItem.js";
import axios from "axios";

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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9)
];

class Overview extends Component {
	constructor(props) {
		super(props);
		const { classes } = this.props;
		this.state = {
			tenants: []
		};
	}

	componentDidMount() {
		axios.get(`/tenants`).then(response => {
			const tenants = response.data;
			this.setState({
				tenants: tenants
			});
		});
	}

	render() {
		// const { tenants } = this.state;

		return (
			<Paper className={this.props.classes.root}>
				<Table className={this.props.classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Email</TableCell>
							<TableCell numeric>IBAN</TableCell>
							{/* <TableCell numeric>Fat (g)</TableCell>
								<TableCell numeric>Carbs (g)</TableCell>
								<TableCell numeric>Protein (g)</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.tenants.map(tenant => {
							return (
								<OverviewItem key={tenant.id} tenant={tenant} />
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}
Overview.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Overview);
