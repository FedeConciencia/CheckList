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

const FormHumedaVista = (props) => {

    //Redireccionamiento de Pagina =>
    let navigate = useNavigate()

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({

    })

    const[dato,setDato] = useState(null)

    const[idVisita, setIdVisita] = useState(null)

    const[idGeneral, setIdGeneral] = useState(null)

    const [humeda, setHumeda] = useState({

        fechaInicio:'',
        fechaFinal:'',
        m2Piso:'',
        pisoPerson:'',
        metros:'',
        metrosPerson:'',
        m2Muro:'',
        muroPerson:'',
        m2Cubierta:'',
        cubiertaPerson:'',
        metrosLineales:'',
        linealesPerson:'',
        diasCaidos:'',
        motivo:'',
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

            const response = await axios("http://localhost:8080/Proyecto_CheckList/HumedaServlet",{

                method:"GET",
                params:{

                    action:"buscarIdVisita",
                    idVisita:idVisita,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Pasar datos al form =>
            setValue("fechaInicio",moment(`${resJson.fechaInicial.year}-${resJson.fechaInicial.month}-${resJson.fechaInicial.day}`).format('DD-MM-YYYY'))
            setValue("fechaFinal",moment(`${resJson.fechaFinal.year}-${resJson.fechaFinal.month}-${resJson.fechaFinal.day}`).format('DD-MM-YYYY'))
            setValue("m2Piso", resJson.m2Piso)
            setValue("pisoPerson", resJson.pisoPerson)
            setValue("metros", resJson.metros)
            setValue("metrosPerson", resJson.metrosPerson)
            setValue("m2Muro", resJson.m2Muro)
            setValue("muroPerson", resJson.muroPerson)
            setValue("m2Cubierta", resJson.m2Cubierta)
            setValue("cubiertaPerson", resJson.cubiertaPerson)
            setValue("metrosLineales", resJson.metrosLineales)
            setValue("linealesPerson", resJson.linealesPerson)
            setValue("diasCaidos", resJson.diasCaidos)
            setValue("motivo", resJson.motivo)
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

            <Alert.Heading className="alertTitle">FORMULARIO VISUALIZACION DE OBRA HUMEDA</Alert.Heading>

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
                    
                    <label>Fecha de inicio Actividades: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="fechaInicio"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("fechaInicio", { 

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
                    {errors.fechaInicio && errors.fechaInicio.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Fecha final de Actividades: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="fechaFinal"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("fechaFinal", { 

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
                    {errors.fechaFinal && errors.fechaFinal.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">M2 de Piso: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="m2Piso"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("m2Piso", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.m2Piso && errors.m2Piso.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Piso N° de Personas: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="pisoPerson"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("pisoPerson", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.pisoPerson && errors.pisoPerson.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Metros lineales Vigas y Columnas: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="metros"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("metros", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.metros && errors.metros.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

             <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Vigas N° de Personas: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="metrosPerson"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("metrosPerson", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.metrosPerson && errors.metrosPerson.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">M2 Muro: </label>

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
                    
                    <label className="my-2">Muro N° de Personas: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="muroPerson"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("muroPerson", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.muroPerson && errors.muroPerson.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">M2 Cubierta: </label>

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
                                message: '*', 
                            },


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
                    
                    <label className="my-2">Cubierta N° de Personas: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="cubiertaPerson"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("cubiertaPerson", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.cubiertaPerson && errors.cubiertaPerson.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Metros lineales de terminaciones: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="metrosLineales"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("metrosLineales", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.metrosLineales && errors.linealesPerson.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Lineales N° de Personas: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="linealesPerson"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("linealesPerson", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.linealesPerson && errors.linealesPerson.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Nro de dias Caidos: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="diasCaidos"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("diasCaidos", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.diasCaidos && errors.diasCaidos.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Motivo: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="motivo"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("motivo", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.motivo && errors.motivo.message}
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

export default FormHumedaVista