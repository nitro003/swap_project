import React from 'react'
import './Toolbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container';

const Toolbar = props =>(
    <Navbar expand="lg">
        <Navbar.Brand className="toolbar_nav_logo" href="#home">
            <img alt="SWAP" src="/img/swap_logo.png" /> SWAP 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
            <Nav className="mr-auto navbar-center">
                <Nav.Link onClick={()=>props.set_dashboard_view('weather_ashboard')} href="#weather_ashboard">Weather Dashboard</Nav.Link>
                <Nav.Link onClick={()=>props.set_dashboard_view('rules_engine')} href="#rules_engine">Rules Engine</Nav.Link>
                <Nav.Link onClick={()=>props.set_dashboard_view('notification_engine')} href="#notification_engine">Notification Engine</Nav.Link>
            </Nav>
            <Nav className="mr-auto navbar-right">
                <Navbar.Text>
                Good Day, in as: <a href="#login">Julio Ceasar</a>
                </Navbar.Text>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
    

export default Toolbar;