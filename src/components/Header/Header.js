import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const styles = {
  root: {
    flexGrow: 1
  },
  bar: {
    position: "static",
    color: "default"
  },
  h3: {
    textAlign: "center"
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <h3 className={classes.h3}>Overzicht</h3>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
