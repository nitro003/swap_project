import React,{ Component } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import {BrowserRouter , Switch , Route } from "react-router-dom"
import { ProtectedRouter } from "./components/Utils/ProtectedRouter"
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
  }

  handleAuthSuccess(data){
      console.log("data:", this.data)
      this.props.history.push("/dashboard")
      this.setState({
        loggedInStatus: "LOGGED_IN"
      })
  }


  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <ProtectedRouter 
            exact 
            path={"/dashboard"} 
            component = {() => <Dashboard loggedInStatus={this.state.loggedInStatus} />}
            />

            <Route 
            exact 
            path={"/login"} 
            render={props => (
              <Login handleAuthSuccess={this.handleAuthSuccess} />
            )} 
            />

            <Route 
            exact 
            path={"/"} 
            render={props => (
              <Home  />
            )} 
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }   
}
