import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
	root: {
		display: "flex",
		minWidth: "165px"
	},
	formControl: {
		minWidth: 200
	}
});

class Filter extends Component {
	static propTypes = {
		filterId: PropTypes.string.isRequired,
		filterItems: PropTypes.array.isRequired,
		filterLabel: PropTypes.string.isRequired
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	renderItems = filterItems => {
		return filterItems.map(filterItem => {
			return (
				<MenuItem key={filterItem.monthNum} value={filterItem.monthNum}>
					{filterItem.month}
				</MenuItem>
			);
		});
	};

	render() {
		const { filterItems, filterLabel, classes } = this.props;
		if (!filterItems) return null;
		return (
			<form autoComplete="off">
				<FormControl className={classes.root}>
					<InputLabel className={classes.formControl}>
						{filterLabel}
					</InputLabel>
					<Select
						name={filterLabel}
						value=""
						onChange={this.handleChange}
						autoWidth={true}
						className={classes.select}
						inputProps={{
							name: this.props.filterId,
							id: this.props.filterId
						}}
					>
						{this.renderItems(filterItems)}
					</Select>
				</FormControl>
			</form>
		);
	}
}
Filter.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Filter);
