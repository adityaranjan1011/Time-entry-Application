import React, { Component } from "react";
import "./TimeEntry.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { NativeSelect, Button,TextField } from "@material-ui/core";

class TimeEntry extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="TimeEntry">
        <form className="timeEntry" noValidate autoComplete="off">
        <TextField id="standard-basic" label="User Name" />        
        </form>       
        <div className="entryContainer">
        <FormControl className="formControl">
        <InputLabel className="label" htmlFor="age-native-helper">Project Name</InputLabel>
        <NativeSelect
          // value={state.age}
          // onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        {/* <FormHelperText>Some important helper text</FormHelperText> */}
        </FormControl>

        <form className="fcontainer" noValidate>
          <TextField
            id="time"
            label="Start Time"
            type="time"
            defaultValue="07:30"
            className="textField"
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
            defaultValue="07:30"
            className="textField"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, 
            }}
          />
        </form>
        </div>
        <Button className="btnSubmit" variant="contained" color="primary">
  Register
</Button>
      </div>
    );
  }
}

export default TimeEntry;
