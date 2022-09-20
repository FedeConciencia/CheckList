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

const FormMaterialesVista = (props) => {

    //Redireccionamiento de Pagina =>
    let navigate = useNavigate()

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({

    })

    const[dato,setDato] = useState(null)

    const[idVisita, setIdVisita] = useState(null)

    const[idGeneral, setIdGeneral] = useState(null)

    const [material, setMaterial] = useState({


        estadoAlmacen:'',
        movMateriales:'',
        almacenSeguro:'',
        envasesVacio:'',
        materialSobran:'',
        estadoLimpieza:'',
        desechosOrgani:'',
        comentario:'',
        

    })


    useEffect(() => {

        cargarDatos()

        setIdGeneral(localStorage.getItem("idVisitaVista"))

        setIdVisita(localStorage.getItem("idGeneralVista"))

    },[])

    const cargarDatos = async() => {   

        try{

            let idVisita = localStorage.getItem("idVisitaVista")

            const response = await axios("http://localhost:8080/Proyecto_CheckList/MaterialServlet",{

                method:"GET",
                params:{

                    action:"buscarIdVisita",
                    idVisita:idVisita,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Pasar datos al form =>
            setValue("estadoAlmacen",resJson.estadoAlmacen)
            setValue("movMateriales", resJson.movMateriales)
            setValue("almacenSeguro", resJson.almacenSeguro)
            setValue("envasesVacio", resJson.envasesVacio)
            setValue("materialSobran", resJson.materialSobran)
            setValue("estadoLimpieza", resJson.estadoLimpieza)
            setValue("desechosOrgani", resJson.desechosOrgani)
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

            <Alert.Heading className="alertTitle">FORMULARIO VISUALIZACION DE MATERIALES</Alert.Heading>

            <br></br>

            <h5 className='red'>* Campos Obligatorios</h5>

            </div>

            <br></br>
            <br></br>  

            <Form>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Estado y orden del almacenamiento o estiba: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="estadoAlmacen"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("estadoAlmacen", { 

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
                    {errors.estadoAlmacen && errors.estadoAlmacen.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Movimiento y traslado de materiales ordenado y sistematizado: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="movMateriales"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("movMateriales", { 

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
                    {errors.movMateriales && errors.movMateriales.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Almacenamiento seguro, bajo llave y encargado: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="almacenSeguro"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("almacenSeguro", { 

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
                    {errors.almacenSeguro && errors.almacenSeguro.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Envases vacios de consumibles ubicados en lugar seguro y ordenado: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="envasesVacio"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("envasesVacio", { 

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
                    {errors.envasesVacio && errors.envasesVacio.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Material Sobrante de recortes y/o escombros en lugar definido y seguro: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="materialSobran"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("materialSobran", { 

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
                    {errors.materialSobran && errors.materialSobran.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Estado de limpieza en lugares de transito de personas y equipos: </label>

                </Col>

                    
                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="estadoLimpieza"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("estadoLimpieza", { 

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
                    {errors.estadoLimpieza && errors.estadoLimpieza.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Desechos organicos (Restos de comida, etc) removidos con frecuencia: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="desechosOrgani"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("desechosOrgani", { 

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
                    {errors.desechosOrgani && errors.desechosOrgani.message}
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

export default FormMaterialesVista