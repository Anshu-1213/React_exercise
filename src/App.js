import React from 'react';
// import Pg from './Pg';

// import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';


import { EuiIcon } from "@elastic/eui";
 import {
   EuiButton,
   EuiButtonEmpty,
   EuiFlexGroup,
   EuiFlexItem,
   EuiButtonIcon
 } from '@elastic/eui';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css'; 
import { ColumnGroup } from 'ag-grid-community';
import PopOver from './PopOver';
import Pagination from './Pagination';
import ComboBox from './ComboBox';
import Delete from './Delete'
import  Filter  from './Filter';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
    this.state = {

      filterField: "",
      filterValue:null,
      paginationPageSize: 5,
      pageCount: null,
      columnDefs: [
        {
          headerName: "Name", field: "name", sortable: true, filter: true, resizable: true
           
        }, {
          headerName: "Branch", field: "branch", filter: true, sortable: true, resizable: true
          
        },   {
          headerName: "DOF", field: "dof", filter: true, sortable: true, resizable: true
        },  {
          headerName: "Contact", field: "contact", filter: true, sortable: true, resizable: true
        },  {
          headerName: "Branch", field: "branch", filter: true, sortable: true, resizable: true
         
        }, {
          headerName: "Email", field: "email", filter: true, sortable: true, resizable: true
        },
        {
          headerName: "Action", field: "action",
          colId: "edit",
          resizable: true,
          cellRendererFramework: (params )=> {
            return (
              <Delete delete={this.deleteRow} />           
              
            )
            }
        }, 
        {
          headerName: "Tag Name",
          field: "tagName",
          filter: true,
          sortable: true,
          resizable: true,
          width: 400,
          cellRendererFramework: function (params) {
            return <ComboBox />
          },
        }
        
          
      
      ],

      rowData: [ {
        name: "Hardik Motwani",
        branch: "IT",
        dof: "20-02-1998",
        contact: 8488866756,
        email: "hardik.motwani@rapidops.com",
      },
      {
    
        name: "Meet Shah",
        branch: "CS",
        dof: "15-05-1999",
        contact: 7982124567,
        email: "meetshah@gmail.com"

      },
      {
        
        name: "Darshan Raval",
        branch: "IT",
        dof: "12-11-1997",
        contact: 9870912667,
        email: "darshan.raval@gmail.com"
      
       },
      {
        name: "Dhairya Shah",
        branch: "CS",
        dof: "10-12-1996",
        contact: 8460556732,
        email: "shahdhairya@gmail.com"
        
       },
      {
        name: "Jeenal Patel",
        branch: "CS",
        dof: "18-01-1999",
        contact: 8901265437,
        email: "jeenalpatel@gmail.com"
      
      },
      {
        
        name: "Alia Khan",
        branch: "IT",
        dof: "22-06-1998",
        contact: 8460123456,
        email: "alia.bhatt@rapidops.com"
      
      },
      {
        
        name: "Vaibhav Mishra",
        branch: "IT",
        contact: 8959434455,
        dof: "13-05-1999",
        email: "kabira.vaibhav@gmail.com"
      
      },
      {

        name: "Ananya Pandey",
        branch: "CS",
        dof: "29-09-1999",
        contact: 8488898765,
        email: "ananya.pandey@gmail.com"
        
    },
    {
       
        name: "Joe Dawson",
        branch: "CS",
        dof: "17-07-1997",
        contact: 9988666756,
        email: "joe.dawson@gmail.com"
        
      },
     {
        
        name: "Kane Wiiliam",
        branch: "IT",
        dof: "30-03-1997",
        contact: 9867542310,
        email: "kanewilliamson@gmail.com"
    
      }
      ] 
    }
  }

  hideShow = (field,boolean) => {
    console.log(field)
    console.log(boolean)
    this.gridColumnApi.setColumnVisible(field,boolean)
    
  }

  hideColumn = (e, field, value) => {
    this.temp = e.target.checked
    this.gridColumnApi.setColumnVisible(field, !this.temp)
    this.inputRef.current.stateChange(value, this.temp)
  }


  deleteRow = () => {
    const selectedData = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: selectedData });
  }

  onButtonClick = (e) => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node.name).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    // filter = (e) => {
    //   // console.log(e.target.value);
    //   // console.log(this.state.rowData);
    //   const filterData = this.state.rowData.filter((element) => {
    //     if (element.name.indexOf(e.target.value) !== -1) {
    //       return element;
    // //     }
    // //   })
     
    //   this.setState({
    //     filterValue : filterData
    //   })
    // }  

    // filter = () => {
    //   this.gridApi.setQuickFilter(document.getElementById('filter-text-box').value)
    // }

    componentDidMount() {
      this.setState({ 
        filterValue:this.state.rowData
       })
    }
 

    pageSizeCallback = (pageSize) => {
      this.gridApi.paginationSetPageSize(pageSize);
      this.setState({
        sizePage: pageSize,
     });
      
    };
    
  
    goToPage = (pageNumber) => {
      this.gridApi.paginationGoToPage(pageNumber);
    };

    onPaginationChanged = () => {
      if(this.gridApi != undefined) {
        this.setState({
          pageCount: this.gridApi.paginationProxy.totalPages
        })
      }
    }

    // filterData = (params) => {
    //   console.log(params)
    //   this.setState({
    //     rowData: params,
    //   });
    // }
  
  render() {
    return (
      <>
      {/* <div>
      
      </div> */}
      <div className="ag-theme-balham ag-react-container"
      style={{
        width:"100%",
        height: "400px"
      }}>
        
 
        {/* <div> 
          Search<input type = "text" placeholder = "filter" id = "filter-text-box" style = {{marginBottom: '10px', width: '250px'}} onChange={this.filter}/> 
        </div> */}
        
          <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButtonEmpty
          color="text"
          onClick={() => window.alert('Button clicked')}>
          Home
        </EuiButtonEmpty>
      </EuiFlexItem>
      </EuiFlexGroup>
        
      <h1 className="ag-theme-balham">Welcome</h1>
      <button onClick={this.onButtonClick}>Filter</button> 

       {/* <input
        type="text"
        name="filterField"
        onChange={this.filter}
        className = "search"
      /> */}
      {/* <Filter rowData={this.state.rowData}  filterData={this.filterData} /> */}
       {/* <EuiButtonIcon iconType="gear"  onClick={() => this.popOver()}>
               </EuiButtonIcon> */}
{/* 
        <PopOver  hideColumn = {this.hideColumn} 
                 ref = {this.inputRef}
        />
                 */}

            < Filter gridApi = {this}  />

          
            <PopOver column = {this.state.columnDefs}
                visibility = {this.hideShow} />
          

         <AgGridReact
          columnDefs={this.state.columnDefs}
          autoGroupColumnDef={this.state.autoGroupColumnDef}
          rowData={this.state.filterValue}
          rowSelection="multiple" 
           onGridReady={params => {this.gridApi = params.api; this.gridColumnApi = params.columnApi}}  
          pagination={true} 
          sizePage = {this.state.sizePage}
          onPaginationChanged = { this.onPaginationChanged }
          
          // paginationAutoPageSize={true}
>
        
        </AgGridReact>  
     <Pagination  pageSizeCallback={this.pageSizeCallback}
          pageCount={this.state.pageCount}
          goToPage={this.goToPage}
          sizePage={this.state.sizePage} />

          {/* <Delete /> */}
      </div>
      </>
    )
    
  }

}

export default App