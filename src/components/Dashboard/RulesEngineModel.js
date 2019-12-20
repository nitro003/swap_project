import React, { Component } from "react"
import './Dashboard.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

export default class RulesEngineModel extends Component{
    constructor(props){
        super(props);
        this.state = {
            rules_engine_response_data: []
        }

        this.set_rules_engine_response_data = this.set_rules_engine_response_data.bind(this)
    }

    componentDidMount(){
        // this.setState({rules_engine_response_data: {}})
        const response_data_data = this.api_call_rules_engine()
        console.log('response data: ', response_data_data)
    }

    set_rules_engine_response_data(data){
        const local_data = data
        this.setState({
            rules_engine_response_data: local_data
        })
    }

    async api_call_rules_engine(data){
        var url = "https://reqres.in/api/unknown";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json();
        }).then(d => {
            this.set_rules_engine_response_data(d.data)
        }).catch(error => console.log(error))
        return response
    }


    render() {
        const rued_data_arr = this.state.rules_engine_response_data;
        // const arrayObj = rued_data_arr.data.map(obj => {
            // return '<tr>'+  + '</tr>'
        // })
        function deym(){
            console.log(
                'now na: ', rued_data_arr
                )
            
        }

        return(
            <Row className="dashboard-content">
                <Col sm={12} className="table-responsive-sm">
                    <Table responsive="sm" className="weather-table ">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Criteria</th>
                                    <th>Temperature</th>
                                    <th>Humidity</th>
                                    <th>Pressure</th>
                                    <th>Action</th>
                                    <th>Expiry Date</th>
                                    <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>                 
                                {this.state.rules_engine_response_data.map(({id, name, year, color, pantone_value}) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td> {name}</td>
                                        <td> {year}</td>
                                        <td> {color}</td>
                                        <td>{pantone_value}</td>
                                        <td> DUMMY DATA </td>
                                        <td>
                                            <i className="fa fa-pencil"></i>
                                            <i className="fa fa-trash"></i>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>
                                        <Form.Control  name="criteria_name" type="text" placeholder="Criteria Name" />
                                    </td>
                                    <td>
                                        <Form.Control  name="temperature" type="text" placeholder="°C" />
                                    </td>
                                    <td>
                                        <Form.Control  name="humidity" type="text" placeholder="%" />
                                    </td>
                                    <td>
                                        <Form.Control  name="Pressure" type="text" placeholder="mb" />
                                    </td>
                                    <td>
                                        <Form.Control  as="select" name="Action" type="text" placeholder="Send SMS" >
                                            <option>Send SMS</option>
                                            <option>Action 1</option>
                                            <option>Action 2</option>
                                        </Form.Control>
                                    </td>
                                    <td>
                                        <Form.Control  name="expire_date" type="date" placeholder="mb" />
                                    </td>
                                    <td>
                                        <i className="fa fa-pencil"></i>
                                        <i className="fa fa-trash"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>                    
                    </Table>
                <Button variant="warning" className="center-button">CREATE</Button>
                </Col>
            </Row>
        );
    }
}