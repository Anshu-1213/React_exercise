import React, { Component } from "react";
import { EuiButtonIcon,EuiFlexGroup } from "@elastic/eui";
export class Delete extends Component {
  render() {
    console.log("delete",this.props)
    return (
      <div>

          <EuiButtonIcon
            iconType="trash"
            className="icons"
            onClick={this.props.delete}
          />
      </div>
    );
  }
}
export default Delete;
