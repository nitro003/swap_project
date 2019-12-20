import React from 'react'
import { Login } from '../Login/Login'

export class Home extends React.Component {
    constructor(props){
        super(props)

        this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
    }

    handleAuthSuccess(data){
        console.log("data:", this.data)
        this.props.history.push("/dashboard")
    }

    render(){
        return(
            <div>
               <h1>ThIS IS FOR THE HOMEPAGE</h1>
               <a href="/login">CLIK HERE TO GO LOGIN PAGE</a>
            </div>
            
        );
    }
}