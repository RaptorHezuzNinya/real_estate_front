import React, { Component } from "react";
import TenantList from "./TenantList.js";

class Table extends Component {
  render() {
    return (
      <div>
        <h2>This is table comp will be higher order comp to supply children</h2>
        <TenantList />
      </div>
    );
  }
}

export default Table;
