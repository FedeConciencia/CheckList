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

const FormGeneralVista = (props) => {

    //Redireccionamiento de Pagina =>
    let navigate = useNavigate()

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({

    })

    const[dato,setDato] = useState(null)

    const[idVisita, setIdVisita] = useState(null)

    const[idGeneral, setIdGeneral] = useState(null)

    const [general, setGeneral] = useState({


        codigo:'',
        nombreCliente:'',
        dni:'',
        domicilio:'',
        usoEdificio:'',
        alturaEdificio:'',
        m2Cubierta:'',
        m2Muro:'',
        alcance:'',
        duracionObra:'',
        comentario:'',

        
    })


    useEffect(() => {

        cargarDatos()

        setIdVisita(localStorage.getItem("idVisitaVista"))

        setIdGeneral(localStorage.getItem("idGeneralVista"))

    },[])

    const cargarDatos = async() => {   

        try{

            let codigo = localStorage.getItem("codigoVista")

            const response = await axios("http://localhost:8080/Proyecto_CheckList/GeneralServlet",{

                method:"GET",
                params:{

                    action:"buscarCodigo",
                    codigo:codigo,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Pasar datos al form =>
            setValue("codigo",resJson.codigo)
            setValue("nombreCliente", resJson.nombreCliente)
            setValue("dni", resJson.dni)
            setValue("domicilio", resJson.domicilio)
            setValue("usoEdificio", resJson.usoEdificio)
            setValue("alturaEdificio", resJson.alturaEdificio)
            setValue("m2Cubierta", resJson.m2Cubierta)
            setValue("m2Muro", resJson.m2Muro)
            setValue("alcance", resJson.alcance)
            setValue("duracionObra", resJson.duracionObra)
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

            <Alert.Heading className="alertTitle">FORMULARIO VISUALIZACION DE DATOS GENERALES</Alert.Heading>

            <br></br>

            <h5 className='red'></h5>

            </div>

            <br></br>
            <br></br>  

            <Form>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>N° de Obra: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="codigo"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("codigo", { 

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
                    {errors.codigo && errors.codigo.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Nombre de Cliente/Empresa: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="nombreCliente"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("nombreCliente", { 

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
                    {errors.nombreCliente && errors.nombreCliente.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Dni/Cuil/Cuit: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="dni"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("dni", { 

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
                    {errors.dni && errors.dni.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Domicilio: </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="domicilio"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("domicilio", { 

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
                    {errors.domicilio && errors.domicilio.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Uso destino del Edificio:  </label>

                </Col>

                <Col sm={7}>
                    
                        <textarea 
                            type="text"
                            name="usoEdificio"
                            disabled={true}
                            placeholder=""
                            className="form-control my-2"
                            {...register("usoEdificio", { 

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
                    {errors.usoEdificio && errors.usoEdificio.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>Altura del Edificio: </label>

                </Col>

                    
                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="alturaEdificio"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("alturaEdificio", { 

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
                    {errors.alturaEdificio && errors.alturaEdificio.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label>M2 de Cubierta: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="m2Cubierta"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("m2Cubierta", { 

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
                    {errors.m2Cubierta && errors.m2Cubierta.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">M2 de Muro: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="m2Muro"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("m2Muro", { 

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
                    {errors.m2Muro && errors.m2Muro.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Alcance: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="alcance"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("alcance", { 

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
                    {errors.alcance && errors.alcance.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Expectativa Cliente duracion Obra: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="duracionObra"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("duracionObra", { 

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
                    {errors.duracionObra && errors.duracionObra.message}
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

export default FormGeneralVista