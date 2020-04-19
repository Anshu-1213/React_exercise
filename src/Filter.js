import React, { Component } from 'react';

class Filter extends Component {

    filter = () => {
        // console.log(this.props)
        const {gridApi} = this.props
        gridApi.gridApi.setQuickFilter(document.getElementById('filter-text-box').value)
      }
    render() {
        return (
            <div>
        <input type="text" placeholder= "filter" id="filter-text-box" style={{marginBottom: '10px',marginLeft: '10px', width: '250px'}} onChange={this.filter}/>
        </div>
        )
    }
}
export default Filter