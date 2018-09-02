import React, { Component } from "react";
import OverviewItem from "./OverviewItem.js";
import axios from "axios";
class Overview extends Component {
  constructor() {
    super();
    this.state = {
      tenants: []
    };
  }
  componentDidMount() {
    axios.get(`/tenants`).then(response => {
      const tenants = response.data;
      this.setState({
        tenants
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.tenants.map(tenant => (
          <OverviewItem tenant={tenant} />
        ))}
      </div>
    );
  }
}

export default Overview;
