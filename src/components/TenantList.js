import React, { Component } from "react";
import axios from "axios";

class TenantList extends Component {
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
          <li key={tenant.email}>{tenant.email}</li>
        ))}
      </div>
    );
  }
}

export default TenantList;
