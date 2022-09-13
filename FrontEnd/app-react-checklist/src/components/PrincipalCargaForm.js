import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import NavigationHome from "../components/NavigationHome";
import Form from "react-bootstrap/Form";
import {useForm} from 'react-hook-form';
import moment from 'moment';
import "../assets/css/formPrincipal.css"
import {useNavigate} from 'react-router-dom';

const PrincipalCargaForm = (props) => {

    //Redireccionamiento =>
    let navigate = useNavigate()

    //react-hook-form (validacion) =>
    const {register, formState: { errors }, handleSubmit} = useForm()

    const[dato,setDato] = useState(null)

    useEffect(() => {


    },[])

    return(


        <Fragment>

            <NavigationHome></NavigationHome>

            <br></br>

            <Container className='body'>

            <Alert variant="success" responsive="sm">

            <br></br>  

            <Alert.Heading className="alertTitle">SELECCION DE FORMULARIOS PARA GARGA</Alert.Heading>

            <br></br>

            <Row>

                <Col>

                    <Button href="/formMateriales" className="botonForm" variant="primary">1- FORMULARIO MATERIALES</Button>
                    
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col>

                    <Button href="/formPersonas" className="botonForm" variant="primary">2- FORMULARIO PERSONAS</Button>
                    
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col>

                    <Button href="/formGremios" className="botonForm" variant="primary">3- FORMULARIO GREMIOS</Button>
                    
                </Col>

            </Row>

            <br></br>


            <Row>

                <Col>

                    <Button href="/formObraHumeda" className="botonForm" variant="primary">4- FORMULARIO OBRA HUMEDA</Button>
                    
                </Col>

            </Row>

            <br></br>


            <Row>

                <Col>

                    <Button href="/formObraSeco" className="botonForm" variant="primary">5- FORMULARIO OBRA SECO</Button>
                    
                </Col>

            </Row>

            <br></br>


            <Row>

                <Col>

                    <Button href="/formPaneles" className="botonForm" variant="primary">6- FORMULARIO PANELES</Button>
                    
                </Col>

            </Row>

            <br></br>


            <Row>

                <Col>

                    <Button href="/formAgua" className="botonForm" variant="primary">7- FORMULARIO RED DE AGUA</Button>
                    
                </Col>

            </Row>

            <br></br>


            <Row>

                <Col>

                    <Button href="/formGas" className="botonForm" variant="primary">8- FORMULARIO RED DE GAS</Button>
                    
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col>

                    <Button href="/formElectricidad" className="botonForm" variant="primary">9- FORMULARIO RED DE ELECTRICIDAD</Button>
                    
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col>

                    <Button href="/formAberturas" className="botonForm" variant="primary">10- FORMULARIO ABERTURAS</Button>
                    
                </Col>

            </Row>

            <br></br>
            <br></br>

            <Row>

                    <Col>

                    <Button type="button" href={`/`}  size="lg" variant="danger">VOLVER</Button> 

                    </Col>

            </Row>


            <br></br>

            </Alert>

            </Container>

        </Fragment>


    )

}

export default PrincipalCargaForm