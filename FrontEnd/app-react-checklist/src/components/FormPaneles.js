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


const FormPaneles = (props) => {

    
    //Redireccionamiento de Pagina =>
    let navigate = useNavigate()

    //react-hook-form (validacion) =>
    const {register, formState: { errors }, handleSubmit} = useForm()

    const[dato,setDato] = useState(null)

    const [panel, setPanel] = useState({

        selladores:'',
        izaje:'',
        tornillos:'',
        perfileria:'',
        panelesFrio:'',
        perfileriaFrio:'',
        espesor:'',
        resultado:'',
        comentario:'',
        fechaAlta:'',
        fechaBaja:'',
        estado:'',
        idVisita:'',
  
    })

    useEffect(() => {

        validarCargaForm()


    },[])

     //Metodo para obtener los datos ingresados en el form =>
     const handleInputChange = (event) => {

        setPanel({

            ...panel,
            [event.target.name] : event.target.value

        })

    }

    //Metodo para gestionar el envio de datos al Servlet y BD =>
    const enviarDatos = (panel, event) => {

            
        insertar(panel);

        event.preventDefault();

        //Limpiar los campos del Form =>
        event.target.reset();

        //Vaciar todas las variables =>
        setPanel({

            selladores:'',
            izaje:'',
            tornillos:'',
            perfileria:'',
            panelesFrio:'',
            perfileriaFrio:'',
            espesor:'',
            resultado:'',
            comentario:'',
            fechaAlta:'',
            fechaBaja:'',
            estado:'',
            idVisita:'',
      

        });

        //Redirecciono =>
        navigate(`/formPrincipal`)
 
    }


    const insertar = async(panel) => {   

        try{

            let id = localStorage.getItem("idVisita")

            const response = await axios("http://localhost:8080/Proyecto_CheckList/PanelServlet",{

                method:"GET",
                params:{

                    action:"insertar",
                    selladores:panel.selladores,
                    izaje:panel.izaje,
                    tornillos:panel.tornillos,
                    perfileria:panel.perfileria,
                    panelesFrio:panel.panelesFrio,
                    perfileriaFrio:panel.perfileriaFrio,
                    espesor:panel.espesor,
                    resultado:panel.resultado,
                    comentario:panel.comentario,

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

            const response = await axios("http://localhost:8080/Proyecto_CheckList/PanelServlet",{

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


            if(validar === false){

                console.log("VALIDAR => ", validar)

                document.querySelector("#mensaje").innerHTML = "YA FUE GESTIONADA LA CARGA DEL FORMULARIO PANELES PARA ESTA VISITA"

                return validar

            }else{

                return validar

            }

           

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

            <Alert.Heading className="alertTitle">FORMULARIO DE REGISTRO DE CONSTRUCCION EN SECO</Alert.Heading>

            <br></br>

            <h5 className='red'>* Campos Obligatorios</h5>

            </div>

            <br></br>
            <br></br>  

            <Form onSubmit={handleSubmit(enviarDatos)}>

            <br></br>

            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Utilizan selladores en el montaje de techo: </label>

                </Col>

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="selladores"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("selladores", { 

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
                    {errors.selladores && errors.selladores.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

             <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Que medios de izaje usan para elevar los paneles: </label>

                </Col>

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="izaje"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("izaje", { 

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
                    {errors.izaje && errors.izaje.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Que tornillos usan para fijar paneles a la estructura: </label>

                </Col>

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="tornillos"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("tornillos", { 

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
                    {errors.tornillos && errors.tornillos.message}
                    </span>

                   
                </Col>

            </Row>
            
            <br></br>

            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Que elementos usan para fijar la perfileria al panel: </label>

                </Col>

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="perfileria"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("perfileria", { 

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
                    {errors.perfileria && errors.perfileria.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Provision de Paneles de Friolatina: </label>

                </Col>

                <Col sm={3}>
                    
                    <select 

                        name="panelesFrio" 
                        onChange={handleInputChange}
                        {...register("panelesFrio", { 

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

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.panelesFrio && errors.panelesFrio.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Provision de Perfileria de Friolatina: </label>

                </Col>

                <Col sm={3}>
                    
                    <select 

                        name="perfileriaFrio" 
                        onChange={handleInputChange}
                        {...register("perfileriaFrio", { 

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

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.perfileriaFrio && errors.perfileriaFrio.message}
                    </span>

                
                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Que espesor de mm de perfileria usan: </label>

                </Col>

                <Col sm={6}>
                    
                    <input 
                        type="number"
                        name="espesor"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        min="0"
                        step="0.01"
                        {...register("espesor", { 

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

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.espesor && errors.espesor.message}
                    </span>


                </Col>

            </Row>

            <br></br>

            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Resultado estetico de la perfileria montada: </label>

                </Col>

                <Col sm={6}>
                    
                    <input 
                        type="text"
                        name="resultado"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("resultado", { 

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
                    {errors.resultado && errors.resultado.message}
                    </span>

                   
                </Col>

            </Row>

            <br></br>
            
            <Row>

                <Col sm={4}>
                    
                    <label className="my-2">Comentario: </label>

                </Col>

                <Col sm={6}>
                    
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

                                validate1:validarCargaForm,

                            }

                        })}   

                    >
                    </textarea>

                </Col>

                <Col sm={1}>

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.comentario && errors.comentario.message}
                    </span>

                    <span className="text-danger text-small d-block mb-2">
                    {
                        errors.comentario && errors.comentario.type === "validate1" && (
                            <div className="error">*</div>
                        )
                    }
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

export default FormPaneles