import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import NavigationHome from "../components/NavigationHome";
import '../assets/css/principalVista.css'
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import moment from 'moment';


const PrincipalGremioUpdate = (props) => {

    let navigate = useNavigate()

    const[dato,setDato] = useState(null)

    const[idVisita, setIdVisita] = useState(null)

    const[idGeneral, setIdGeneral] = useState(null)

   
    useEffect(() => {

        obtenerGremios()

        
        setIdVisita(localStorage.getItem("idVisitaUpdate"))

        setIdGeneral(localStorage.getItem("idGeneralUpdate"))
        

    },[])

    const obtenerGremios = async() => {


        try{

            let idPersona = localStorage.getItem("idPersonaUpdate")

            const response = await axios("http://localhost:8080/Proyecto_CheckList/GremioServlet",{

                method:"GET",
                params:{

                    action:"listarXidPersona",
                    idPersona:idPersona,


                }


            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Guardamos en el Hooks Dato =>
            setDato(resJson)

    
        }catch(error){

            console.log(error)

            

        }


    }


    if(dato === null){

        return(

            <Fragment>

                <NavigationHome></NavigationHome>

                <br></br>

                <Container>

                <Alert variant="success" responsive="sm">

                <br></br>  

                <div className='body'>

                <Alert.Heading className="alertTitle">LISTA DE GREMIOS PARA ACTUALIZACION</Alert.Heading>

                <br></br>

                <h5 className='red'>No se encontraron datos de gremios.</h5>

                </div>

                <br></br>

                <Row>

                    <Col>

                    <Button type="button" href={`/formPrincipalUpdate?idGeneral=${idGeneral}&idVisita=${idVisita}`} variant="danger" size="lg">VOLVER</Button>

                    </Col>

                </Row>

                <br></br>

                </Alert>

                </Container>

            </Fragment>



        )

    }else{


        return(

            <Fragment>

                <NavigationHome></NavigationHome>

                <br></br>

                <Container className='body'>

                <Alert variant="success" responsive="sm">

                <br></br>  

                <Alert.Heading className="alertTitle">LISTA DE GREMIOS PARA ACTUALIZACION</Alert.Heading>

                <br></br>

                <h5 className='red'></h5>

                <br></br>
                <br></br>

                <Table className="tabla" striped bordered hover variant="dark" responsive="sm">

                    <thead>

                        <tr>

                            <th className='celda'>Indice</th>
                            <th className='celda'>Nombre_Gremio</th>
                            <th className='celda'>Nombre_Contratista</th>
                            <th className='celda'>Apellido_Contratista</th>
                            <th className='celda'>Acciones</th>
                            
                        </tr>


                    </thead>


                    <tbody>

                        {dato.map((item,i) => (


                            <tr key={i}>

                                <td className='celda'>{i+1}</td>
                                <td className='celda'>{item.nombreGremio}</td>
                                <td className='celda'>{item.nombreContratista}</td>
                                <td className='celda'>{item.apellidoContratista}</td>
                                <td className='celda'>

                                    <Button variant="warning" size="sm" href={`/formGremioUpdate?idGremio=${item.idGremio}`}>OBTENER DATOS</Button>

                                </td>

                            </tr>


                        ))}


                    </tbody>



                </Table>

                <br></br>

                <Row>

                    <Col>

                    <Button type="button" href={`/formPrincipalUpdate?idGeneral=${idGeneral}&idVisita=${idVisita}`} variant="danger" size="lg">VOLVER</Button>

                    </Col>

                </Row>

                <br></br>

                </Alert>

                </Container>

            </Fragment>



        )


    }    


}

export default PrincipalGremioUpdate