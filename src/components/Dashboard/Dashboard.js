import React, { Component } from "react"
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import RulesEngineModel from './RulesEngineModel'
import WeatherDashboardModel from './WeatherDashboardModel'


import Toolbar  from '../Toolbar/Toolbar'

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Table from 'react-bootstrap/Col'

export class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {},
            dashboard_view: 'default'
        }
        this.set_dashboard_view = this.set_dashboard_view.bind(this);
        // this.dashboard_controller = this.dashboard_controller.bind(this);
        // this.dashboard_display = <WeatherDashboardModel />
    }

    componentDidMount(){
        if(localStorage.getItem('active_page')){
            this.setState({
                dashboard_view: localStorage.getItem('active_page')
            })
        }
    }

    set_dashboard_view(status){
        this.setState({dashboard_view: status})
        localStorage.setItem('active_page',status)
    }

    dashboard_controller(data){
        if(this.state.dashboard_view === 'default' || this.state.dashboard_view === 'weather_ashboard' ){
            return <WeatherDashboardModel />
        }else if(this.state.dashboard_view === 'rules_engine'){
            return <RulesEngineModel />
        }
    }

    render() {
        return(
            <Container fluid="true">
                <header className="header-container">
                    <Toolbar 
                    set_dashboard_view={this.set_dashboard_view} 
                    />
                </header>
                {this.dashboard_controller()}
            </Container>
        );
    }
}