import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import MyHeader from './Header/MyHeader';
import MyFooter from './Footer/MyFooter';
import Credentials from './Body/Credentials';
import Address from './Body/Address';
import Gender from './Body/Gender';
import MyTable from './Table/MyTable';

class App extends Component {
constructor(props) {
super(props);
this.state ={
  FirstName:'',
  LastName:'',
  Email:'',
  Password:'',
  Address:'',
  State:'',
  City:'',
  Zip:'',
  array:[],
  insert: false,
  };
this.onHandleChange=this.onHandleChange.bind(this);
this.Click=this.Click.bind(this);
this.Submitted=this.Submitted.bind(this);
this.Reset=this.Reset.bind(this);
this.getData = this.getData.bind(this);
}
onHandleChange(e) {
  this.setState({
    [e.target.id]: e.target.value,
  })
}
Reset() {
  console.log("hey");
  this.setState({
        array:[],
  })
}
Click() {
   console.log("hello", this.state.array);
  this.setState({
  FirstName:'',
  LastName:'',
  Email:'',
  Password:'',
  Address:'',
  State:'',
  City:'',
  Zip:'',
  //array:[],
  })
}
Submitted() {
  console.log("hi");
  let datavalue={
  FirstName:this.state.FirstName,
  LastName:this.state.LastName,
  Email:this.state.Email,
  Address:this.state.Address,
  State:this.state.State,
  City:this.state.City,
  Zip:this.state.Zip,
};
console.log('datavalue=', datavalue);
this.state.array.push(datavalue);
this.setState({array:this.state.array}, () => this.Click());
console.log('a=', this.state.array);
this.getData();
}

getData() {
  console.log('Going to get data');
    axios({
    method:'POST',
    url: 'http://localhost:8000/myName',
    data: {
       firstName: this.state.FirstName,
       lastName: this.state.LastName,
       email: this.state.Email,
       address: this.state.Address,
       city: this.state.City,
       state: this.state.State,
       zip: this.state.Zip,
    }
  }).then((err, res) => {
    console.log(err, res);
  }).catch((err) => {
    console.log('Error happened', err);
  }).finally(() => {
    console.log('Done with api call');
     });
  // axios({
  //   method:'POST',
  //   url: 'http://localhost:8000',
  //   data:'',
  // }).then((err, res) => {
  //   console.log(err, res);
  // }).catch((err) => {
  //   console.log('Error happened', err);
  // }).finally(() => {
  //   console.log('Done with api call');
  // });
}

render() {
  //console.log(this.state);
  return (
    <div>
    <style>{'body { background-color: lightblue; }'}</style>
    <MyHeader />
    <form>
    <Credentials
    onHandleChange={e =>this.onHandleChange(e)} 
    FirstName={this.state.FirstName}
    LastName={this.state.LastName}
    Email={this.state.Email}
    Password={this.state.Password}
    />

    <Address onHandleChange={e =>this.onHandleChange(e)}
    Address={this.state.Address}
    State={this.state.State}
    City={this.state.City}
    Zip={this.state.Zip}
    />

    <Gender onHandleChange={e =>this.onHandleChange(e)} />
    </form>
    <MyTable 
    array={this.state.array}/> <br /> <br />

    <MyFooter
    Click={this.Click}
    getData={this.getData}
    FirstName={this.state.FirstName}
    LastName={this.state.LastName}
    Email={this.state.Email}
    Password={this.state.Password}
    Submitted={this.Submitted}
    Reset={this.Reset}
    />
    </div>

    );
}
}
export default App;