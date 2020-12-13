import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import UserNav from './UserNav';
import Nav from './Nav';
import login from './login';
import Register from './register';
import Calculator from './Calculator';


class App extends Component {

  

  render() {
  if (Register.role == "doctor") {
  	return(<div className="App">
    {Register.role}
    </div>);
} else if (Register.role == "user") {
	return(<Router>
	<UserNav />
	<div className="App">
    <header className="App-header">
        User
      </header>
      <Switch>
    <Route path="/" exact component={Calculator}/>
    </Switch>
    </div></Router>);
} else {
    return (
  	<Router>
    <div className="App">
    <header className="App-header">
        Sleep Calculator
      </header>
    <Switch>
    <Route path="/" exact component={Calculator}/>
    <Route path="/login" component={login}/>
    <Route path="/register" component={Register}/>
    <Route path="/user/:id"/>
    <Route path="/chat"/>
    </Switch>
    </div>
    </Router>
  );
}
  

}
}


export default App;
