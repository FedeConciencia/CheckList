import React, {Component, Fragment, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Label from "react-bootstrap/FormLabel";
import {useNavigate} from 'react-router-dom';


const NavigationHome = (props) => {

    const navigate = useNavigate()

    const[dato,setDato] = useState()


    useEffect(() => {


    },[])


    return (

        <Fragment>

        <Navbar bg="primary" variant="dark" responsive="sm">

            <Navbar.Brand href="/">HOME</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/prevCarga">CARGAR DATOS</Nav.Link>
            <Nav.Link href="/verificarObra">VER DATOS</Nav.Link>
            </Nav>

        </Navbar>

        </Fragment>  

    );  



}

export default NavigationHome;