import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import NavigationHome from "./NavigationHome";

const PrevCargaConclusion = (props) => {

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

            <Alert.Heading className="alertTitle">¿TIENES QUE CARGAR LA CONCLUSION FINAL DE OBRA?</Alert.Heading>

            <br></br>
            <br></br>  

            <Row>

                <Col>
                
                    <Button variant='primary' size="lg" href="/formConclusion" className='botonGrande'>SI</Button>&nbsp;&nbsp;
                    <Button variant='primary' size="lg" href="/formPrincipal" className='botonGrande'>NO</Button>
                
                </Col>


            </Row>

            <br></br> 

            </Alert>

            </Container>

        </Fragment>

    )


}

export default PrevCargaConclusion