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


//ACTUALIZADO AL 22-9-22 (V2) FUNCIONA OK =>
const VerificarObra = (props) => {


    //Redireccionamiento =>
    let navigate = useNavigate()

    //react-hook-form (validacion) =>
    const {register, formState: { errors }, handleSubmit} = useForm()

    const[dato,setDato] = useState(null)

    const [obra, setObra] = useState({

        codigo:'',

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
    const enviarDatos = async (obra, event) => {


        //Guardamos el codigo o n° de obra en el localStorage =>
        localStorage.setItem("codigoVista", obra.codigo);

        event.preventDefault();

        //Limpiar los campos del Form =>
        event.target.reset();

        
        //Redirecciono y paso los datos a traves de un search =>
        navigate(`/principalVista?nObra=${obra.codigo}`)

    
      
    }

     //Validar Codigo ingresado no exista en la BD entidad General =>
     const validarCodigo = async(codigo) => {

        try{

            const response = await fetch("http://localhost:8080/Proyecto_CheckList/GeneralServlet?action=listar", {

                method:"GET",

            })
            
            const resJson = await response.json()

            console.log("DATOS API => ", resJson)

            let validar = false

            for(let i = 0; i < resJson.length; i++){

                if(resJson[i].codigo === codigo){

                    validar = true;
                    break;

                }

            }

            //Si el codigo o N° de obra ingresado existe en la BD retorna true, caso contrario retorna false y no valida el form =>
            return validar

        }catch(error){

            console.log("Error => ", error)

        }    

    }

    
    return(


        <Fragment>

            <NavigationHome></NavigationHome>

            <br></br>

            <Container>

            <Alert variant="success" responsive="sm">

            <br></br>  

            <div className='body'>

            <Alert.Heading className="alertTitle">VALIDACION DEL N° DE OBRA</Alert.Heading>

            <br></br>

            <h5 className='red'>* Campos Obligatorios</h5>

            </div>

            <br></br>
            <br></br>  

            <Form onSubmit={handleSubmit(enviarDatos)}>

            <Row>

                <Col className="col-md-3">
                    
                    <label className="my-2">Numero de Obra: </label>

                </Col>

                <Col>
                    
                    <input 
                        type="text"
                        name="codigo"
                        onChange={handleInputChange}
                        placeholder="* Campo Obligatorio"
                        className="form-control my-2"
                        {...register("codigo", { 

                            required:{
                                value: true,
                                message: '*', 
                            },

                            validate:{

                                validate1:validarCodigo,
 
                            }

                        })}   

                    >
                    </input>

                </Col>

                <Col className="col-md-3">

                        
                    <span className="text-danger text-small d-block mb-2">
                    {errors.codigo && errors.codigo.message}
                    </span>

                    <span className="text-danger text-small d-block mb-2">
                    {
                        errors.codigo && errors.codigo.type === "validate1" && (
                            <div className="error">El n° de obra ingresado no existe.</div>
                        )
                    }
                    </span>



                </Col>

                </Row>

                <br></br>

                <Row className='body'>   

                <Col>
                    
                    <Button type="submit" variant="primary" size="lg">VERIFICAR</Button>&nbsp;&nbsp;
                    <Button type="button" href={`/`} variant="danger" size="lg">VOLVER</Button>
                
                </Col>


            </Row>


            </Form>

            <br></br>

            </Alert>

            </Container>

        </Fragment>


    )


}

export default VerificarObra