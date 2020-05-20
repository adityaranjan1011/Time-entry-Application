import React, { Component } from 'react';
import './Register.css';
import { Redirect } from 'react-router-dom';
import { TextField ,Button} from "@material-ui/core";


class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDisabled:true,
      reg_name:'',
      user_name:'',
      reg_email:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firstHandler = (event)=>{
    this.setState({
      reg_name:event.target.value
    });
    if(event.target.name==='firstname'){
      if(event.target.value==='' || event.target.value===null ){
        this.setState({
          firstnameError:true,
          isDisabled:false,
        })
      } else {
        this.setState({
          firstnameError:false,     
          firstName:event.target.value
        })
      }
    }
  }
  secondHandler = (e)=>{
    this.setState({
      user_name:e.target.value
    });
    if(e.target.name==='userName'){
      if(e.target.value==='' || e.target.value===null){
        this.setState({
          userNameError:true,
          isDisabled:false,
        })
      } else {
        this.setState({
          userNameError:false,
          userName:e.target.value
        })
      }
    }
  }

  thirdHandler = (event)=>{
    this.setState({
      reg_email:event.target.value
    })
    if(event.target.name ==='email'){
      this.validateEmail(event.target.value);
      this.setState({
        isDisabled:false
      })
     }
  }
  
  validateEmail(email){
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if(result===true){
      this.setState({
        emailError:false,
        email:email
      })
    } else{
      this.setState({
        emailError:true
      })
    }
  }
  handleSubmit=(event)=>{  
   
    event.preventDefault();
    
    try{
      const data = {
        firstName: this.state.firstName,
        userName: this.state.userName,
        email: this.state.email,
       };
      const user_body= this.state;
      fetch('http://localhost:5000/api/register',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user_body)
      });
      alert('Registered Successful');
      this.setState({
      reg_name:'',
      user_name:'',
      reg_email:'',
      isDisabled:true
      });
    }catch(err){
      console.log(err.message);
    }    
  }
  render() {
    return (
      
      <div className="Register" >
        <h1> Register YourSelf </h1>
        <form className="timeEntry" Validate autoComplete="off">
        <TextField id="standard-basic" 
        label="Name"
        value={this.state.reg_name}
        onChange={this.firstHandler}
        id="firstname"
        name="firstname"
        />        
        </form>  
        <form className="timeEntry" noValidate autoComplete="off">
        <TextField id="standard-basic" label="User Name" 
         value={this.state.user_name}
         onChange={this.secondHandler}
         id="userName" 
         name="userName"
        />        
        </form>  
        <form className="emailId" noValidate autoComplete="off">
        <TextField className="txtfeild" 
        label="EmailId"
        id="email" 
        name="email" 
        value={this.state.reg_email}
        onChange={this.thirdHandler}       
        />        
         {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}
        </form>  
        <Button className="submitButton" variant="contained" color="primary" disabled={this.state.isDisabled} onClick={this.handleSubmit}>
  Register
</Button>
      </div>
    );
  }
}

export default Register;