import React from 'react';
import Register from './Components/Register';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import TimeEntry from './Components/TimeEntry';

function App() {

  return (
   <Router>
    <div className="App">
        <Route path="/" exact render={() => { return  <Register/> }}/>
        <Route path="/entry" exact render={() => { return  <TimeEntry/>}}/>      
    </div>

   </Router>

  );
}

export default App;
