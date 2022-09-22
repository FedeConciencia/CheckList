import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import NavigationHome from "./NavigationHome";

//ACTUALIZADO AL 22-9-22 (V2) FUNCIONA OK =>
const PrevCarga = (props) => {

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

            <Alert.Heading className="alertTitle">¿ES LA PRIMERA VISITA A LA OBRA?</Alert.Heading>

            <br></br>
            <br></br>  

            <Row>

                <Col>
                
                    <Button variant='primary' size="lg" href="/formGeneral" className='botonGrande'>SI</Button>&nbsp;&nbsp;
                    <Button variant='primary' size="lg" href="/pedidoObra" className='botonGrande'>NO</Button>
                
                </Col>


            </Row>

            <br></br> 

            </Alert>

            </Container>

        </Fragment>

    )


}

export default PrevCarga