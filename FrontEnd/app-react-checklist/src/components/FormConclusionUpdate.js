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
import { useLocation } from "react-router-dom";
import "../assets/css/formMateriales.css";

//ACTUALIZADO AL 22-9-22 (V2) FUNCIONA OK =>
const FormConclusionUpdate = (props) => {

    //Redireccionamiento =>
    let navigate = useNavigate()

    //Obtengo los datos pasados por search URL =>
    let {search} = useLocation();
    let query = new URLSearchParams(search)

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({

    })

    const[dato,setDato] = useState(null)

    const[idVisita, setIdVisita] = useState(null)

    const[idGeneral, setIdGeneral] = useState(null)

    const [conclusion, setConclusion] = useState({

        obraTerminada:'',
        avanceActual:'',
        avanceEsperado:'',
        fechaFinalizacion:'',
        gradoSatisfaccion:'',
        comentario:'',
        fechaAlta:'',
        fechaBaja:'',
        estado:'',
        idGeneral:'',
        
    })

    useEffect(() => {

         //Obtenemos los datos del localStorage =>
         setIdGeneral(localStorage.getItem("idGeneralUpdate"))
         setIdVisita(localStorage.getItem("idVisitaUpdate"))
 
         cargarDatos()
        
    },[])


    //Metodo para obtener los datos ingresados en el form =>
    const handleInputChange = (event) => {

        setConclusion({

            ...conclusion,
            [event.target.name] : event.target.value

        })

    }


    //Metodo para gestionar el envio de datos al Servlet y BD =>
    const enviarDatos = async (red, event) => {

            
        actualizar(red);

        event.preventDefault();

        //Limpiar los campos del Form =>
        event.target.reset();

        //Vaciar todas las variables =>
        setConclusion({

            obraTerminada:'',
            avanceActual:'',
            avanceEsperado:'',
            fechaFinalizacion:'',
            gradoSatisfaccion:'',
            comentario:'',
            fechaAlta:'',
            fechaBaja:'',
            estado:'',
            idGeneral:'',

        });

        
        //Redireccionamos a la pagina principal de formUpdate =>
        navigate(`/formPrincipalUpdate?idGeneral=${idGeneral}&idVisita=${idVisita}`)

    
      
    }

    
    const cargarDatos = async() => {   

        try{

            //Obtengo el n° de obra del localStorage =>
            let id = localStorage.getItem("idGeneralUpdate")

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
            setValue("fechaFinalizacion", moment(`${resJson.fechaFinalizacion.year}-${resJson.fechaFinalizacion.month}-${resJson.fechaFinalizacion.day}`).format('YYYY-MM-DD'))
            setValue("gradoSatisfaccion", resJson.gradoSatisfaccion)
            setValue("comentario", resJson.comentario)


            //Guardamos en LocalStorage el idMaterial =>
            localStorage.setItem("idConclusionUpdate", resJson.idConclusion)
            
            
        }catch(error){

            console.log(error)

            alert("ERROR, NO FUE POSIBLE OBTENER LOS DATOS, VUELVA A INTENTARLO.")

        }


    }


    const actualizar = async(conclusion) => {

        try{

            //Obtenermos el idGeneral del localStorage =>
            let idGen = localStorage.getItem("idGeneralUpdate")
            let idVis = localStorage.getItem("idVisitaUpdate")
            let idCon = localStorage.getItem("idConclusionUpdate")

            const response = await axios(`http://localhost:8080/Proyecto_CheckList/ConclusionServlet`, {

                method:"GET",
                params:{

                    action:'actualizar',
                    obraTerminada:conclusion.obraTerminada,
                    avanceActual:conclusion.avanceActual,
                    avanceEsperado:conclusion.avanceEsperado,
                    fechaFinalizacion:conclusion.fechaFinalizacion,
                    gradoSatisfaccion:conclusion.gradoSatisfaccion,
                    comentario:conclusion.comentario,
                   
                   //Datos que no pueden ser modificados => 
                   idGeneral:idGen,
                   idConclusion:idCon,

                   //Se autocompletan =>
                   fechaAlta:moment().format('YYYY-MM-DD'), 
                   fechaBaja:moment("1900-01-01").format('YYYY-MM-DD'), 
                   estado:"actualizado",


                }


            })

            const resJson = await response.data

            console.log("DATOS API ACTUALIZAR => ", resJson)

            alert("DATOS ACTUALIZADOS CON EXITO.")


        }catch(error){

            console.log("Error => ", error)

            alert("ERROR, NO FUE POSIBLE ACTUALIZAR LOS DATOS, VUELVA A INTENTARLO.")


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

            <Alert.Heading className="alertTitle">FORMULARIO DE ACTUALIZACION DE CONCLUSION</Alert.Heading>

            <br></br>

            <h5 className='red'>* Campos Obligatorios</h5>

            </div>

            <br></br>
            <br></br>  

            <Form onSubmit={handleSubmit(enviarDatos)}>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Obra Terminada: </label>

                </Col>

                <Col>
                    
                    <select 

                        name="obraTerminada" 
                        onChange={handleInputChange}
                        {...register("obraTerminada", { 

                            required:{
                                value: true,
                                message: '*', 
                            },

                            validate:{

                            }

                        })}   
                        
                    >

                        <option value="">Seleccione una Opcion</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="Otro">Otro (Aclarar en Comentario)</option>

                    </select>

                </Col>

                <Col className="col-md-3">

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.obraTerminada && errors.obraTerminada.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Avance Actual (%): </label>

                </Col>

                <Col>
                    
                    <input 
                        type="number"
                        name="avanceActual"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato con 10,00 %"
                        className="form-control my-2"
                        min="0"
                        max="100"
                        step="0.01"
                        {...register("avanceActual", { 

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
                    {errors.avanceActual && errors.avanceActual.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Avance Esperado (%): </label>

                </Col>

                <Col>
                    
                    <input 
                        type="number"
                        name="avanceEsperado"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato con 10,00 %"
                        className="form-control my-2"
                        min="0"
                        max="100"
                        step="0.01"
                        {...register("avanceEsperado", { 

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
                    {errors.avanceEsperado && errors.avanceEsperado.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>


                <Col className="col-md-3">
                    <br></br>
                    <label>Fecha Finalizacion: </label>

                
                </Col>

                <Col>
                    <br></br>
                     <input 
                        type="date"
                        name="fechaFinalizacion"
                        onChange={handleInputChange}
                        placeholder="Ingrese la Fecha Nacimiento Formato 2020-11-05"
                        className="form-control"
                        {...register("fechaFinalizacion", { 

                            required:{
                                value: true,
                                message: '*' 
                            },

                        })}      
                    >
                    </input>
                
                
                </Col>

                <Col className="col-md-3">

                        <br></br>
                        <span className="text-danger text-small d-block mb-2">
                        {errors.fechaFinalizacion && errors.fechaFinalizacion.message}
                        </span>

                </Col>



            </Row>

            <br></br>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Grado Satisfaccion del Cliente (1 a 5): </label>

                </Col>

                <Col>
                    
                    <input 
                        type="number"
                        name="gradoSatisfaccion"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        min={1}
                        max={5}
                        className="form-control my-2"
                        {...register("gradoSatisfaccion", { 

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
                    {errors.gradoSatisfaccion && errors.gradoSatisfaccion.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Comentario: </label>

                </Col>

                <Col>
                    
                    <textarea 
                        type="text"
                        name="comentario"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Hasta 3000 caracteres"
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

                <Col className="col-md-3">

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.comentario && errors.comentario.message}
                    </span>


                </Col>

            </Row>

            <br></br>
            <br></br>

            <Row className='body'>   

                <Col>
                    
                    <Button type="submit" variant="primary" size="lg">ACTUALIZAR</Button>&nbsp;&nbsp;
                    <Button type="button" href={`/formPrincipalUpdate?idGeneral=${idGeneral}&idVisita=${idVisita}`} variant="danger" size="lg">VOLVER</Button>
                
                </Col>


            </Row>

            </Form>

            <br></br>

            </Alert>

            </Container>


        </Fragment>


    )



}

export default FormConclusionUpdate