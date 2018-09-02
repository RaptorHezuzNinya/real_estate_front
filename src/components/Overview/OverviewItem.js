import React, { Component } from "react";

class OverviewItem extends Component {
  render(props) {
    console.log(this.props.tenant);
    return (
      <div>
        <p>{this.props.tenant.email}</p>
        <p>{this.props.tenant.iban}</p>
      </div>
    );
  }
}

export default OverviewItem;
