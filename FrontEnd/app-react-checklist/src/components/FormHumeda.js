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

const FormHumeda = (props) => {

    //Redireccionamiento de Pagina =>
    let navigate = useNavigate()

    //react-hook-form (validacion) =>
    const {register, formState: { errors }, handleSubmit} = useForm()

    const[dato,setDato] = useState(null)

    const [humeda, setHumeda] = useState({

        fechaInicial:'',
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
        fechaAlta:'',
        fechaBaja:'',
        estado:'',
        idVisita:'',
  
    })

    useEffect(() => {


    },[])

    //Metodo para obtener los datos ingresados en el form =>
    const handleInputChange = (event) => {

        setHumeda({

            ...humeda,
            [event.target.name] : event.target.value

        })

    }

    //Metodo para gestionar el envio de datos al Servlet y BD =>
    const enviarDatos = (humeda, event) => {

            
        insertar(humeda);

        event.preventDefault();

        //Limpiar los campos del Form =>
        event.target.reset();

        //Vaciar todas las variables =>
        setHumeda({

            fechaInicial:'',
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
            fechaAlta:'',
            fechaBaja:'',
            estado:'',
            idVisita:'',

        });

        //Redirecciono =>
        navigate(`/PrincipalCargaForm`)
 
    }

    const insertar = async(humeda) => {   

        try{

            let id = localStorage.getItem("idVisita")

            const response = await axios("http://localhost:8080/Proyecto_CheckList/HumedaServlet",{

                method:"GET",
                params:{

                    action:"insertar",
                    fechaInicial:humeda.fechaInicial,
                    fechaFinal:humeda.fechaFinal,
                    m2Piso:humeda.m2Piso,
                    pisoPerson:humeda.pisoPerson,
                    metros:humeda.metros,
                    metrosPerson:humeda.metrosPerson,
                    m2Muro:humeda.m2Muro,
                    muroPerson:humeda.muroPerson,
                    m2Cubierta:humeda.m2Cubierta,
                    cubiertaPerson:humeda.cubiertaPerson,
                    metrosLineales:humeda.metrosLineales,
                    linealesPerson:humeda.linealesPerson,
                    diasCaidos:humeda.diasCaidos,
                    motivo:humeda.motivo,
                    comentario:humeda.comentario,

                    //Se autocompletan =>
                    fechaAlta:moment().format('YYYY-MM-DD'),
                    fechaBaja:moment('1900-01-01').format('YYYY-MM-DD'),
                    estado:'activo',
                    idVisita:id,


                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            alert("DATOS GUARDADOS CON EXITO.")



        }catch(error){

            console.log(error)

            alert("ERROR, NO FUE POSIBLE GUARDAR LOS DATOS, VUELVA A INTENTARLO.")

        }


    }


    //Metodo para validar si el idVisita en la entidad Material existe =>
    const validarCargaForm = async() => {

        try{

            let id = localStorage.getItem("idVisita")

            let validar = true

            console.log("ID_VISITA => ", id)

            const response = await axios("http://localhost:8080/Proyecto_CheckList/HumedaServlet",{

                method:"GET",
                params:{

                    action:"listar",

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)


            for(let i = 0; i < resJson.length; i++){

                if((resJson[i].idVisita).toString() === (id).toString()){

                    validar = false
                    break

                }

            }

            console.log("VALIDAR => ", validar)

            document.querySelector("#mensaje").innerHTML = "YA FUE GESTIONADA LA CARGA DEL FORMULARIO OBRA HUMEDA PARA ESTA VISITA"

            //Si detecta que en la entidad Material existe un registro con el idVisita notifica e impide su carga.
            return validar

        }catch(error){

            console.log(error)

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

            <Alert.Heading className="alertTitle">FORMULARIO DE REGISTRO DE OBRA HUMEDA</Alert.Heading>

            <br></br>

            <h5 className='red'>* Campos Obligatorios</h5>

            </div>

            <br></br>
            <br></br>  

            <Form onSubmit={handleSubmit(enviarDatos)}>

            <br></br>

            <Row>


                <Col sm={3}>
                    <br></br>
                    <label>Fecha de inicio Actividades: </label>

                
                </Col>

                <Col sm={2}>
                    <br></br>
                     <input 
                        type="date"
                        name="fechaInicial"
                        onChange={handleInputChange}
                        placeholder=""
                        className="form-control"
                        {...register("fechaInicial", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </input>
                
                
                </Col>

                <Col sm={1}>

                        <br></br>
                        <span className="text-danger text-small d-block mb-2">
                        {errors.fechaInicial && errors.fechaInicial.message}
                        </span>

                </Col>



            </Row>

            <br></br>

            <Row>


                <Col sm={3}>
                    <br></br>
                    <label>Fecha final de Actividades: </label>

                
                </Col>

                <Col sm={2}>
                    <br></br>
                     <input 
                        type="date"
                        name="fechaFinal"
                        onChange={handleInputChange}
                        placeholder=""
                        className="form-control"
                        {...register("fechaFinal", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </input>
                
                
                </Col>

                <Col sm={1}>

                        <br></br>
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

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="m2Piso"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato 2,00 (Decimal)"
                        className="form-control my-2"
                        {...register("m2Piso", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </input>

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

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="pisoPerson"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato 1 (entero)"
                        className="form-control my-2"
                        {...register("pisoPerson", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </input>

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

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="metros"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato 2,00 (Decimal)"
                        className="form-control my-2"
                        {...register("metros", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </input>

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

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="metrosPerson"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato 1 (entero)"
                        className="form-control my-2"
                        {...register("metrosPerson", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </input>

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

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="m2Muro"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato 2,00 (Decimal)"
                        className="form-control my-2"
                        {...register("m2Muro", { 

                            required:{
                                value: true,
                                message: '*', 
                            },


                        })}   

                    >
                    </input>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.m2Muro && errors.m2Muro.message}
                    </span>

                   
                </Col>

            </Row>
            

            
            <br></br>
            <br></br>

            <Row className='body'>   

                <Col>
                    
                    <Button type="submit" variant="primary" size="lg">CARGAR</Button>&nbsp;&nbsp;
                    <Button type="button" href={`/formPrincipal`} variant="danger" size="lg">VOLVER</Button>
                
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

export default FormHumeda
