import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Filter needs to be reuable so render the props

// const styles = theme => ({
// 	root: {
// 		display: "flex",
// 		flexWrap: "wrap"
// 	},
// 	formControl: {
// 		margin: theme.spacing.unit,
// 		minWidth: 120
// 	},
// 	selectEmpty: {
// 		marginTop: theme.spacing.unit * 2
// 	}
// });

class Filter extends Component {
	// need init state to have comp render
	state = {
		month: ""
	};

	handleChange = event => {
		console.log(event.target.name);
		this.setState({ [event.target.name]: event.target.value });
	};
	// className={classes.root}
	// className={classes.formControl}
	render() {
		// const { classes } = this.props;
		return (
			<form>
				<FormControl>
					<InputLabel>Month</InputLabel>
					<Select
						value={this.state.month}
						onChange={this.handleChange}
						inputProps={{
							name: "month",
							id: "month-filter"
						}}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</form>
		);
	}
}

// Filter.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

export default Filter;
