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

    //Obtengo los datos pasados por search URL =>
    let {search} = useLocation();
    let query = new URLSearchParams(search)

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({

    })

    const[dato,setDato] = useState(null)

    //Obtener el parametro que pasamos por el URL =>
    const[urlGremio,setUrlGremio] = useState(query.get("idGremio"))

    const [obra, setObra] = useState({

        nombreGremio:'',
        nroPersonas:'',
        horarioDesde:'',
        horarioHasta:'',
        fechaDesde:'',
        fechaHasta:'',
        nroArgentinos:'',
        nombreContratista:'',
        apellidoContratista:'',
                
    })
    
    useEffect(() => {

        
        cargarDatos()

        setUrlGremio(query.get("idGremio"))

        
    },[query.get("idGremio")])

    
    const cargarDatos = async() => {   

        try{

           

            const response = await axios("http://localhost:8080/Proyecto_CheckList/GremioServlet",{

                method:"GET",
                params:{

                    action:"buscar",
                    idGremio:urlGremio,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Pasar datos al form =>
            setValue("nombreGremio", resJson.nombreGremio)
            setValue("nroPersonas", resJson.nroPersonas)
            setValue("horarioDesde", moment(resJson.horarioDesde).add(24, 'hours').format('HH:mm'))
            setValue("horarioHasta", moment(resJson.horarioHasta).add(24, 'hours').format('HH:mm'))
            setValue("fechaDesde", moment(`${resJson.fechaDesde.year}-${resJson.fechaDesde.month}-${resJson.fechaDesde.day}`).format('DD-MM-YYYY'))
            setValue("fechaHasta", moment(`${resJson.fechaHasta.year}-${resJson.fechaHasta.month}-${resJson.fechaHasta.day}`).format('DD-MM-YYYY'))
            setValue("nroArgentinos", resJson.nroArgentinos)
            setValue("nombreContratista", resJson.nombreContratista)
            setValue("apellidoContratista", resJson.apellidoContratista)
            
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

            <Alert.Heading className="alertTitle">FORMULARIO VISUALIZACION DE GREMIO</Alert.Heading>

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
                    
                    <label>Nombre del Gremio: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="nombreGremio"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("nombreGremio", { 

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
                    {errors.nombreGremio && errors.nombreGremio.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Numero de Personas: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="nroPersonas"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("nroPersonas", { 

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
                    {errors.nroPersonas && errors.nroPersonas.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Horario Desde: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="horarioDesde"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("horarioDesde", { 

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
                    {errors.horarioDesde && errors.horarioDesde.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Horario Hasta: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="horarioHasta"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("horarioHasta", { 

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
                    {errors.horarioHasta && errors.horarioHasta.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Fecha Desde: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="fechaDesde"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("fechaDesde", { 

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
                    {errors.fechaDesde && errors.fechaDesde.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Fecha Hasta: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="fechaHasta"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("fechaHasta", { 

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
                    {errors.fechaHasta && errors.fechaHasta.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    
                    <label>Numero de Argentinos: </label>

                
                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="nroArgentinos"
                        disabled={true}
                        placeholder=""
                        className="form-control"
                        {...register("nroArgentinos", { 

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
                    {errors.nroArgentinos && errors.nroArgentinos.message}
                    </span>

                </Col>



            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Nombre del Contratista: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="nombreContratista"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("nombreContratista", { 

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
                    {errors.nombreContratista && errors.nombreContratista.message}
                    </span>

                    
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={3}>
                    
                    <label className="my-2">Apellido del Contratista: </label>

                </Col>

                <Col sm={7}>
                    
                    <textarea 
                        type="text"
                        name="apellidoContratista"
                        disabled={true}
                        placeholder=""
                        className="form-control my-2"
                        {...register("apellidoContratista", { 

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
                    {errors.apellidoContratista && errors.apellidoContratista.message}
                    </span>

                    
                </Col>

            </Row>
            
            <br></br>
            <br></br>

            <Row className='body'>   

                <Col>
                
                    <Button type="button" href={`/principalGremioVista`} variant="danger" size="lg">VOLVER</Button>
                
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
