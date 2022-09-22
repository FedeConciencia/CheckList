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
import {useNavigate} from 'react-router-dom';
import "../assets/css/formMateriales.css";

//ACTUALIZADO AL 22-9-22 (V2) FUNCIONA OK =>
const FormVisitaVista = (props) => {

    //Redireccionamiento de Pagina =>
    let navigate = useNavigate()

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({

    })

    const[dato,setDato] = useState(null)

    const[idVisita, setIdVisita] = useState(null)

    const[idGeneral, setIdGeneral] = useState(null)

    const [visita, setVisita] = useState({

        fecha:'',
        nombreTecnico:'',
        apellidoTecnico:'',
        nVisita:'',
       
    })


    useEffect(() => {

        

        setIdVisita(localStorage.getItem("idVisitaVista"))

        setIdGeneral(localStorage.getItem("idGeneralVista"))

        cargarDatos()

    },[])

    const cargarDatos = async() => {   

        try{


            console.log("IDVISITA => ", idVisita)


            const response = await axios("http://localhost:8080/Proyecto_CheckList/VisitaServlet",{

                method:"GET",
                params:{

                    action:"buscar",
                    idVisita:idVisita,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Pasar datos al form =>
            setValue("fecha",moment(`${resJson.fecha.year}-${resJson.fecha.month}-${resJson.fecha.day}`).format('DD-MM-YYYY'))
            setValue("nombreTecnico", resJson.nombreTecnico)
            setValue("apellidoTecnico", resJson.apellidoTecnico)
            setValue("nVisita", resJson.nVisita)
           

            alert("DATOS ENCONTRADOS CON EXITO.")

        }catch(error){

            console.log(error)

            alert("ERROR, NO FUE POSIBLE OBTENER LOS DATOS, VUELVA A INTENTARLO.")

        }


    }

    
    
    return(



        <Fragment>

            <NavigationHome></NavigationHome>

            <br></br>

            <Container>

            <Alert variant="success" responsive="sm">

            <br></br>    

            <div className="body">

            <Alert.Heading className="alertTitle">FORMULARIO VISUALIZACION DE DATOS VISITA</Alert.Heading>

            <br></br>

            <h5 className='red'></h5>

            </div>

            <br></br>
            <br></br>  

            <Form>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Nombre del Tecnico:  </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="nombreTecnico"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("nombreTecnico", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },

                                validate:{


                                }

                            })}   

                        >
                        </textarea>

                </Col>

                
                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.nombreTecnico && errors.nombreTecnico.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Apellido del Tecnico: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="apellidoTecnico"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("apellidoTecnico", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },

                                validate:{


                                }

                            })}   

                        >
                        </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.apellidoTecnico && errors.apellidoTecnico.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Numero de Visita: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="nVisita"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("nVisita", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },

                                validate:{


                                }

                            })}   

                        >
                        </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.nVisita && errors.nVisita.message}
                    </span>


                </Col>

            </Row>

            <br></br>
            <br></br>

            <Row className='body'>   

                <Col>
                
                    <Button type="button" href={`/formPrincipalVista?idGeneral=${idGeneral}&idVisita=${idVisita}`} variant="danger" size="lg">VOLVER</Button>
                
                </Col>


            </Row>

            <br></br>
            <br></br>

            <Row className='body'>   

                <Col>
                    
                   <h5 id="mensaje" className='mensaje'></h5>

                </Col>


            </Row>

            </Form>

            <br></br>

            </Alert>

            </Container>


        </Fragment>




    )



}

export default FormVisitaVista