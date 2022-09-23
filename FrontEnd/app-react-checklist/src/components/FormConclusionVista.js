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
import { useLocation } from "react-router-dom";

const FormConclusionVista = (props) => {

    //Redireccionamiento de Pagina =>
    let navigate = useNavigate()

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({

    })

    const[dato,setDato] = useState(null)

    const[idVisita, setIdVisita] = useState(null)

    const[idGeneral, setIdGeneral] = useState(null)

    const [obra, setObra] = useState({

        obraTerminada:'',
        avanceActual:'',
        avanceEsperado:'',
        fechaFinalizacion:'',
        gradoSatisfaccion:'',
        comentario:'',
      
        
    })
    
    useEffect(() => {

        
        cargarDatos()

        setIdVisita(localStorage.getItem("idVisitaVista"))

        setIdGeneral(localStorage.getItem("idGeneralVista"))



    },[])

    
    const cargarDatos = async() => {   

        try{

            let id = localStorage.getItem("idGeneralVista")

            const response = await axios("http://localhost:8080/Proyecto_CheckList/ConclusionServlet",{

                method:"GET",
                params:{

                    action:"buscarIdGeneral",
                    idGeneral:id,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Pasar datos al form =>
            setValue("obraTerminada", resJson.obraTerminada)
            setValue("avanceActual", resJson.avanceActual)
            setValue("avanceEsperado", resJson.avanceEsperado)
            setValue("fechaFinalizacion", moment(`${resJson.fechaFinalizacion.year}-${resJson.fechaFinalizacion.month}-${resJson.fechaFinalizacion.day}`).format('DD-MM-YYYY'))
            setValue("gradoSatisfaccion", resJson.gradoSatisfaccion)
            setValue("comentario", resJson.comentario)
            

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

            <Alert.Heading className="alertTitle">FORMULARIO VISUALIZACION DE DATOS CONCLUSION FINAL</Alert.Heading>

            <br></br>

            <h5 className='red'></h5>

            <br></br>

            </div>

            <br></br>
            <br></br>  

            <Form>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Obra Terminada: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="obraTerminada"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("obraTerminada", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </textarea>
                
                
                </Col>

                <Col sm={1}>

                      
                    <span className="text-danger text-small d-block mb-2">
                    {errors.obraTerminada && errors.obraTerminada.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Avance Actual (%): </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="avanceActual"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("avanceActual", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </textarea>
                
                
                </Col>

                <Col sm={1}>

                    
                    <span className="text-danger text-small d-block mb-2">
                    {errors.avanceActual && errors.avanceActual.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Avance Esperado (%): </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="avanceEsperado"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("avanceEsperado", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </textarea>
                
                
                </Col>

                <Col sm={1}>

                    
                    <span className="text-danger text-small d-block mb-2">
                    {errors.avanceEsperado && errors.avanceEsperado.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Fecha Finalizacion: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="fechaFinalizacion"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("fechaFinalizacion", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </textarea>
                
                
                </Col>

                <Col sm={1}>

                    
                    <span className="text-danger text-small d-block mb-2">
                    {errors.fechaFinalizacion && errors.fechaFinalizacion.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Grado Satisfaccion del Cliente: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="gradoSatisfaccion"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("gradoSatisfaccion", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </textarea>
                
                
                </Col>

                <Col sm={1}>

                    
                    <span className="text-danger text-small d-block mb-2">
                    {errors.gradoSatisfaccion && errors.gradoSatisfaccion.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Comentario: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="comentario"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("comentario", { 

                            required:{
                                value: true,
                                message: '*', 
                            },

                            validate:{

                                

                            }

                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.comentario && errors.comentario.message}
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

export default FormConclusionVista
