import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import NavigationHome from "./NavigationHome";
import Image from 'react-bootstrap/Image'
import ImgLogo from "../assets/img/logoLtn.png"
import "../assets/css/home.css"

const Home = (props) => {

    const[dato,setDato] = useState(null)

    useEffect(() => {

    },[])

    return(

        <Fragment>

            <NavigationHome></NavigationHome>

            <br></br>

            <Container className="body">

            <Alert variant="success" responsive="sm">

            <br></br>    

            <Alert.Heading className="alertTitle">CHECK LIST OBRA GRUPO LTN</Alert.Heading>

            <br></br>
            <br></br>  

            <Row>

                <Col>

                    <Image rounded="true" className='imgLogo' src={ImgLogo}></Image>
                
                </Col>

            </Row>

            <br></br> 

            <Row>

                <Col>
                
                    <h4>A traves de la aplicacion web check list de Grupo LTN los usuarios podran</h4><br></br>
                    <h4>acceder a cargar y visualizar datos necesarios para control de obras.</h4>
                </Col>

            </Row>

            <br></br> 

            <Row>

                <Col>
                
                    <Button variant='primary' size="lg" href="/prevCarga" className='botonGrande'>CARGAR DATOS</Button>&nbsp;&nbsp;
                    <Button variant='primary' size="lg" href="/vista" className='botonGrande'>VER DATOS</Button>
                
                </Col>


            </Row>

            <br></br> 

            </Alert>

            </Container>

        </Fragment>

    )



}

export default Home;