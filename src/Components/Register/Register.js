import React, { Component } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom'
import { TextField ,Button} from "@material-ui/core";
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect :false,
      name:'',
      useName:'',
      email:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firstHandler = (event)=>{
    this.setState({
      name:event.target.value
    })
  }
  secondHandler = (event)=>{
    this.setState({
      userName:event.target.value
    })
  }

  thirdHandler = (event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handleSubmit=(event)=>{
    console.log(event);
    this.setState({
      name:'',
      userName:'',
      email:''
    })
    event.preventDefault();
  }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  onItemCick = () => {
    this.setState({
      redirect: true
    })   
    if (this.state.redirect) {
      console.log("return calll");
      return <Redirect to="/entry" />
    }
   
  }

  render() {
    return (
      <div className="Register" >
        <h1> Register YourSelf </h1>
        <form className="timeEntry" noValidate autoComplete="off">
        <TextField id="standard-basic" 
        label="Name"
        value={this.state.name}
        onChange={this.firstHandler}
        />        
        </form>  
        <form className="timeEntry" noValidate autoComplete="off">
        <TextField id="standard-basic" label="User Name" 
         value={this.state.userName}
         onChange={this.secondHandler}
        />        
        </form>  
        <form className="emailId" noValidate autoComplete="off">
        <TextField className="txtfeild" 
        label="EmailId"
        value={this.state.email}
        onChange={this.thirdHandler} />        
        </form>  
        <Button className="submitButton" variant="contained" color="primary" onSubmit={this.handleSubmit}>
  Register
</Button>
      </div>
    );
  }
}

export default Register;