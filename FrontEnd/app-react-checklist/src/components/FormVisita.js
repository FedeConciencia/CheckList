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
import "../assets/css/formGeneral.css"
import {useNavigate} from 'react-router-dom';

const FormVisita = (props) => {

    //Redireccionamiento =>
    let navigate = useNavigate()

    //react-hook-form (validacion) =>
    const {register, formState: { errors }, handleSubmit} = useForm()

    const[dato,setDato] = useState(null)

    const [visita, setVisita] = useState({

        fecha:'',
        nombreTecnico:'',
        apellidoTecnico:'',
        nVisita:'',
        fechaAlta:'',
        fechaBaja:'',
        estado:'',
        idGeneral:'',
        
    })

    useEffect(() => {

        
    },[])


    //Metodo para obtener los datos ingresados en el form =>
    const handleInputChange = (event) => {

        setVisita({

            ...visita,
            [event.target.name] : event.target.value

        })

    }


    //Metodo para gestionar el envio de datos al Servlet y BD =>
    const enviarDatos = (visita, event) => {

            
        insertar(visita);

        event.preventDefault();

        //Limpiar los campos del Form =>
        event.target.reset();

        //Vaciar todas las variables =>
        setVisita({

            fecha:'',
            nombreTecnico:'',
            apellidoTecnico:'',
            nVisita:'',
            fechaAlta:'',
            fechaBaja:'',
            estado:'',
            idGeneral:'',

        });

        //Redirecciono y paso los datos a traves de un search =>
        navigate(`/formPrincipal`)

    
      
    }

    //Metodo para solicitar el ultimo idGeneral =>
    const ultimoIdGeneral = async() => {

        let ultimoId = 0;

        try{

            const response = await fetch("http://localhost:8080/Proyecto_CheckList/GeneralServlet?action=ultimoId", {

                method:"GET",
                
            })

            const resJson = await response.json()

            ultimoId = resJson

            console.log("ULTIMO IDGENERAL => ", ultimoId)

        }catch(error){

            console.log("Error => ", error)

        }

        return ultimoId


    }

    

    //Metodo para insertar los datos a la BD =>
    const insertar = async(visita) => {

        try{

            //Solicitamos el ultimo idGeneral =>
            let ultimoId = await ultimoIdGeneral()

            console.log("ULTIMO ID DESDE VISTA => ", ultimoId)

            const response = await axios("http://localhost:8080/Proyecto_CheckList/VisitaServlet", {

                method:"GET",
                params:{

                    action:"insertar",
                    fecha:moment().format('YYYY-MM-DD'), 
                    nombreTecnico:visita.nombreTecnico,
                    apellidoTecnico:visita.apellidoTecnico,
                    nVisita:1,
                    //Se autocompletan =>
                    fechaAlta:moment().format('YYYY-MM-DD'), 
                    fechaBaja:moment("1900-01-01").format('YYYY-MM-DD'), 
                    estado:"activo",
                    idGeneral:ultimoId,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Guardamos el n° de visita en el localStorage =>
            localStorage.setItem("nVisita", 1);

            alert("DATOS GUARDADOS CON EXITO.")


        }catch(error){

            console.log("Error =>", error)

            alert("ERROR, NO FUE POSIBLE GUARDAR LOS DATOS, VUELVA A INTENTARLO.")

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

            <Alert.Heading className="alertTitle">FORMULARIO DE REGISTRO DE PRIMER VISITA</Alert.Heading>

            <br></br>

            <h5 className='red'>* Campos Obligatorios</h5>

            </div>

            <br></br>
            <br></br>  

            <Form onSubmit={handleSubmit(enviarDatos)}>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Nombre del Tecnico: </label>

                </Col>

                <Col>
                    
                    <input 
                        type="text"
                        name="nombreTecnico"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("nombreTecnico", { 

                            required:{
                                value: true,
                                message: '*', 
                            },

                            validate:{

                               

                            }

                        })}   

                    >
                    </input>

                </Col>

                <Col className="col-md-3">

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.nombreTecnico && errors.nombreTecnico.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Apellido del Tecnico: </label>

                </Col>

                <Col>
                    
                    <input 
                        type="text"
                        name="apellidoTecnico"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("apellidoTecnico", { 

                            required:{
                                value: true,
                                message: '*', 
                            },

                            validate:{

                               

                            }

                        })}   

                    >
                    </input>

                </Col>

                <Col className="col-md-3">

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.apellidoTecnico && errors.apellidoTecnico.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row className='body'>   

                <Col>
                    
                    <Button type="submit" variant="primary" size="lg">CARGAR</Button>&nbsp;&nbsp;
                    <Button type="button" href={`/prevCarga`} variant="danger" size="lg">VOLVER</Button>
                
                </Col>


            </Row>

            </Form>

            <br></br>

            </Alert>

            </Container>


        </Fragment>


    )

}

export default FormVisita