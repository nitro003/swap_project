import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'

export class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: '',
            token: null,
            credError: false,
            login_loading: false,
            auth_msg: ''
        }
    }
    
    handleSubmit = (event) =>{
        event.preventDefault()

    }

    swap_submit = (event) =>{
        this.setState({login_loading: true})
        console.log("Current Username: ", this.state.username)
        console.log("Current Password: ", this.state.passsword)
        this.call_login_endpoint()
        
    }

    async call_login_endpoint(){
        const endpointURL = "https://reqres.in/api/login"
        const response = await fetch(endpointURL, {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.username,
                "password": this.state.password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const token = await response.json(endpointURL)
        if (response.status === 200){
            this.props.handleAuthSuccess(token)
            localStorage.setItem('swap_access_token',token.token)
        }else{
            this.setState({credError: true})
        }
        this.setState({login_loading: false})
        
    }

    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
    return(
        <Container fluid="true" className="h-100">
            <Row >
                <Col md={1} className="company_name">
                    <img src="/img/swap_logo.png" alt="SWAP LOGO" className="logo_size"></img>
                    <p >SWAP</p>
                </Col>
            </Row>
            <div className="centered">
                <Alert variant="danger" show={this.state.credError}>
                    Username and password does not match.
                </Alert>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlid="formUsername" >
                        <Form.Label>Username</Form.Label>
                        <InputGroup  controlid="inptGrpUsername">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className="fa fa-user"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control className="input_box_size" onChange={this.handleInputChange} name="username" type="email" placeholder="juandelacruz@wewinasone.com" />
                        </InputGroup >
                    </Form.Group>
                    
                    <Form.Group controlid="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <InputGroup  controlid="inptGrpPassword">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon2"><i className="fa fa-key"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control onChange={this.handleInputChange} name="password" className="input_box_size" type="password" placeholder="••••••••••••••••••••••••••••••••••" />
                        </InputGroup >
                    </Form.Group>
                    <Button className="swap_btn_login" variant="warning" onClick={this.swap_submit}>
                        {this.state.login_loading ? "LOADING" : "LOGIN"}
                    </Button>
                </Form>
            </div>
                
        </Container>
    );
}
}