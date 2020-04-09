import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      title: 'React Simple Data Entry',
      act: 0,
      index: '',
      datas: [] 
    }
  }
  componentDidMount() {
    this.refs.name.focus();
  }
  fsubmit = (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let surname = this.refs.surname.value;

    if(this.state.act === 0) {
      let data = {
        name, surname
      }
      datas.push(data);
    }else {
      let index = this.state.index;
      datas[index].name = name;
      datas[index].surname = surname;
    }
    

    this.setState({
      datas: datas,
      act: 0
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();

  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.surname.value = data.surname;

    this.setState({
      act: 1,
      index: i
    });
    this.refs.name.focus();
  }
  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="First Name" className="formField" />
          <input type="text" ref="surname" placeholder="Last Name" className="formField" />
          <button onClick={(e)=>this.fsubmit(e)} className="myButton">Add</button>

        </form>
        <pre>
          {datas.map((data, i) =>
            <li key= {i} className = "myList">
               {i+1}.{data.name}, {data.surname}
               <button onClick={()=>this.fRemove(i)} className="myButton">remove</button>
               <button onClick={()=>this.fEdit(i)} className="myButton">update</button>

            </li>
          )}

        </pre>
        
      </div> 
    );
  }


}
export default App;
