import React, { Component } from "react"
import './Dashboard.css'
import Toolbar  from '../Toolbar/Toolbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Col'

export class DashboardView extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {},
            timeanddate: 'Saturday, October 26,2019 8:47PM',
            geolocatiion: 'Bacolod, Negros Occidental',
            weather: 'Isolated Thunderstorms',
            percipitation_val: '30',
            humidity_val: '79',
            wind_val: '14',
            temp_val: '32',
            temp_min_val:'29',
            temp_max_val: '32',
            pressure_val: '1,008.8',
            wind_direction_val: 'NNE 10 km/h',
            wind_speed_val: '14.5',
            clouds_val: 'Considerable cloudiness',
            sunrise_time: '5:38 am',
            sunset_time: '5:26 pm'
        }        
    }

    render() {
        return(
            <Container fluid="true">
                <header>
                    <Toolbar />
                </header>
                <Row className="dashboard-content">
                    <Col sm={4}>
                        <div className="weather-headline">
                            <h6>{this.state.timeanddate}</h6>
                            <h6>{this.state.geolocatiion} </h6>
                            <div className="weather_temp">
                                <h3>{this.state.weather} </h3>
                                <img alt="weather" src="./img/013-storm.png" />
                                <h1> {this.state.temp_val}°</h1>
                            </div>
                            <h6>Percipitation: {this.state.percipitation_val}%</h6>
                            <h6>Humidity: {this.state.humidity_val}% </h6>
                            <h6>Wind: {this.state.wind_val}km/h</h6>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <Table responsive="sm" className="weather-table ">
                            <table className="table">
                                <tr>
                                    <td>Temperature</td>
                                    <td>{this.state.temp_val}</td>
                                </tr>
                                <tr>
                                    <td >Temperature(min)</td>
                                    <td styles="text-align: right;">{this.state.temp_min_val}</td>
                                </tr>
                                <tr>
                                    <td>Temperature(max)</td>
                                    <td>{this.state.temp_max_val}</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{this.state.humidity_val}</td>
                                </tr>
                                <tr>
                                    <td>Pressure</td>
                                    <td>{this.state.pressure_val}</td>
                                </tr>
                                <tr>
                                    <td>Wind Direction</td>
                                    <td>{this.state.wind_val}</td>
                                </tr>
                                <tr>
                                    <td>Wind Speed</td>
                                    <td>{this.state.wind_speed_val}</td>
                                </tr>
                                <tr>
                                    <td>Clouds</td>
                                    <td>{this.state.clouds_val}</td>
                                </tr>
                                <tr>
                                    <td>Sunrise</td>
                                    <td>{this.state.sunrise_time}</td>
                                </tr>
                                <tr>
                                    <td>Sunset</td>
                                    <td>{this.state.sunset_time}</td>
                                </tr>
                            </table>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}