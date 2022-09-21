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


const PrincipalVista = (props) => {

    let navigate = useNavigate()

    //Obtengo los datos pasados por search URL =>
    let {search} = useLocation();
    let query = new URLSearchParams(search)

    const[dato,setDato] = useState(null)

    //Obtener el parametro que pasamos por el URL =>
    const[urlObra,setUrlObra] = useState(query.get("nObra"))

   
    useEffect(() => {

        setUrlObra(query.get("nObra"))

        obtenerVisitasGeneral()

    },[query.get("nObra")])

    const obtenerVisitasGeneral = async() => {

        try{

            const response = await axios("http://localhost:8080/Proyecto_CheckList/AuxVisitaGeneralServlet",{

                method:"GET",
                params:{

                    action:"listar",
                    codigo:urlObra


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

                <Alert.Heading className="alertTitle">PLANILLA DE VISITAS</Alert.Heading>

                <br></br>

                <h5 className='red'>No se encontraron datos de visitas por el n° de obra ingresado.</h5>

                </div>

                <br></br>

                <Row>

                    <Col>

                    <Button type="button" href={`/`}  size="lg" variant="danger">VOLVER</Button> 

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

                <Alert.Heading className="alertTitle">PLANILLA DE VISITAS</Alert.Heading>

                <br></br>

                <h5 className='red'></h5>

                <br></br>
                <br></br>

                <Table className="tabla" striped bordered hover variant="dark" responsive="sm">

                    <thead>

                        <tr>

                            <th className='celda'>Indice</th>
                            <th className='celda'>N° de Obra</th>
                            <th className='celda'>Fecha Visita</th>
                            <th className='celda'>Nombre Tecnico</th>
                            <th className='celda'>Apellido Tecnico</th>
                            <th className='celda'>N° de Visita</th>
                            <th className='celda'>Nombre de Cliente</th>
                            <th className='celda'>Apellido de Cliente</th>
                            <th className='celda'>Dni</th>
                            <th className='celda'>Domicilio</th>
                            <th className='celda'>Acciones</th>
                            
                        </tr>


                    </thead>


                    <tbody>

                        {dato.map((item,i) => (


                            <tr key={i}>

                                <td className='celda'>{i+1}</td>
                                <td className='celda'>{item.codigo}</td>
                                <td className='celda'>{moment(`${item.fechaVisita.year}-${item.fechaVisita.month}-${item.fechaVisita.day}`).format('YYYY-MM-DD')}</td>
                                <td className='celda'>{item.nombreTecnico}</td>
                                <td className='celda'>{item.apellidoTecnico}</td>
                                <td className='celda'>{item.nVisita}</td>
                                <td className='celda'>{item.nombreCliente}</td>
                                <td className='celda'>{item.apellidoCliente}</td>
                                <td className='celda'>{item.dni}</td>
                                <td className='celda'>{item.domicilio}</td>
                                <td className='celda'>

                                    <Button variant="warning" size="sm" href={`/formPrincipalVista?idGeneral=${item.idGeneral}&idVisita=${item.idVisita}`}>OBTENER DATOS</Button>

                                </td>

                            </tr>


                        ))}


                    </tbody>



                </Table>

                <br></br>

                <Row>

                    <Col>

                    <Button type="button" href={`/`}  size="lg" variant="danger">VOLVER</Button> 

                    </Col>

                </Row>

                <br></br>

                </Alert>

                </Container>

            </Fragment>



        )


    }    


}

export default PrincipalVista