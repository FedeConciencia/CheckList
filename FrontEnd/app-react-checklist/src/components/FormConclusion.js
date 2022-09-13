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

const FormConclusion = (props) => {

    //Redireccionamiento =>
    let navigate = useNavigate()

    //react-hook-form (validacion) =>
    const {register, formState: { errors }, handleSubmit} = useForm()

    const[dato,setDato] = useState(null)

    const [obra, setObra] = useState({

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

        
        
    },[])


    //Metodo para obtener los datos ingresados en el form =>
    const handleInputChange = (event) => {

        setObra({

            ...obra,
            [event.target.name] : event.target.value

        })

    }


    //Metodo para gestionar el envio de datos al Servlet y BD =>
    const enviarDatos = (obra, event) => {

            
        insertar(obra);

        event.preventDefault();

        //Limpiar los campos del Form =>
        event.target.reset();

        //Vaciar todas las variables =>
        setObra({

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

        //Redirecciono y paso los datos a traves de un search =>
        //navigate(`/`)

    
      
    }

    //Metodo para solicitar el idGeneral x N° de obra =>
    const idGeneral = async() => {

        let idGeneral = 0;

        let codigo = localStorage.getItem("codigo")

        console.log("OBTENER CODIGO => ", codigo)

        try{

            const response = await axios("http://localhost:8080/Proyecto_CheckList/GeneralServlet", {

                method:"GET",
                params:{

                    action:"idGeneralxCodigo",
                    codigo: codigo,

                }
                
            })

            const resJson = await response.data

            idGeneral = resJson

            console.log("ID => ", resJson)

        }catch(error){

            console.log("Error => ", error)

        }

        return idGeneral


    }

    

    //Metodo para insertar los datos a la BD =>
    const insertar = async(obra) => {

        let idGeneral = 0

        try{

            //Solicitamos el ultimo idGeneral =>
            idGeneral = await idGeneral()

            console.log("ID_GENERAL  => ", idGeneral)

            const response = await axios("http://localhost:8080/Proyecto_CheckList/ConclusionServlet", {

                method:"GET",
                params:{

                    action:"insertar",
                    obraTerminada:obra.obraTerminada,
                    avanceActual:obra.avanceActual,
                    avanceEsperado:obra.avanceEsperado,
                    fechaFinalizacion:obra.fechaFinalizacion,
                    gradoSatisfaccion:obra.gradoSatisfaccion,
                    comentario:obra.comentario,
                    //Se autocompletan =>
                    fechaAlta:moment().format('YYYY-MM-DD'), 
                    fechaBaja:moment("1900-01-01").format('YYYY-MM-DD'), 
                    estado:"activo",
                    idGeneral:idGeneral,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

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

            <Alert.Heading className="alertTitle">FORMULARIO DE REGISTRO CONCLUSION FINAL DE OBRA</Alert.Heading>

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
                    
                    <label className="my-2">Avance Actual: </label>

                </Col>

                <Col>
                    
                    <input 
                        type="number"
                        name="avanceActual"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato con 10,00"
                        className="form-control my-2"
                        min="0"
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
                    
                    <label className="my-2">Avance Esperado: </label>

                </Col>

                <Col>
                    
                    <input 
                        type="number"
                        name="avanceEsperado"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio / Formato con 10,00"
                        className="form-control my-2"
                        min="0"
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
                    
                    <label className="my-2">Grado Satisfaccion del Cliente: </label>

                </Col>

                <Col>
                    
                    <input 
                        type="number"
                        name="gradoSatisfaccion"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        min={1}
                        max={10}
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

export default FormConclusion