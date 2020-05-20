import React, { Component } from "react";
import "./TimeEntry.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { NativeSelect, Button,TextField } from "@material-ui/core";

class TimeEntry extends Component {
  constructor(props){
  super(props);
  this.state = {
    user_name:'',
    project_name:'',
    start_time:'',
    end_time:''
  };
  this.changeHandler = this.changeHandler.bind(this);
  }

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}event.preventDefault();
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  changeHandler = (event) => {
    console.log(event);
    event.preventDefault();
    window.location.pathname='';
  }

  firstHandler = (event) =>{    
    this.setState({
      user_name:event.target.value
    })
  }
  secondHandler = (event) =>{
    this.setState({
      project_name:event.target.value
    })
  }

  thirdHandler = (event)=>{
    this.setState({
      start_time:event.target.value
    })
  }
  fourthHandler = (event) =>{
    this.setState({
      end_time:event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
  console.log(this.state);
    try{
      const entryTime = this.state;
      fetch('http://localhost:5000/api/timeEntry', {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(entryTime)
      });
       this.setState({
        user_name:'',
        project_name:'',
        start_time:'',
        end_time:''
       });

    }catch(err){
      console.log(err);
    }
  }
  render() {
    
    return (
      <div className="TimeEntry">

        <form className="timeEntry" noValidate autoComplete="off">
        <TextField id="standard-basic"
         label="User Name" 
         onChange={this.firstHandler}
         value={this.state.user_name}/>        
        </form>       

        <div className="entryContainer">
        <FormControl className="formControl">
        <InputLabel className="label" htmlFor="age-native-helper">Project Name</InputLabel>
        <NativeSelect
          value={this.state.project_name}
          onChange={this.secondHandler}
        >
          <option aria-label="None" value="" />
          <option value="Time-Entry-Application">Time-Entry-Application</option>
        </NativeSelect>
        </FormControl>

        <form className="fcontainer" noValidate>
          <TextField
            id="time"
            label="Start Time"
            type="time"
            placeholder="HH:MM"
            className="textField"
            value={this.state.start_time}
            onChange={this.thirdHandler}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, 
            }}
          />
        </form>
        <form className="fcontainer" noValidate>
          <TextField
            id="endtime"
            label="End Time"
            type="time"
            // defaultValue="11:30:04"
            placeholder="HH:MM"
            className="textField"
            value={this.state.end_time}
            onChange={this.fourthHandler}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, 
            }}
          />
        </form>
        </div>
        <Button className="btnSubmit" variant="contained" color="primary" onClick = {this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}

export default TimeEntry;
