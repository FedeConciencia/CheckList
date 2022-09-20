import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import PrevCarga from "../src/components/PrevCarga"
import FormGeneral from "../src/components/FormGeneral"
import FormVisita from "../src/components/FormVisita"
import PrincipalCargaForm from "../src/components/PrincipalCargaForm"
import PedidoObra from "../src/components/PedidoObra"
import PrevCargaConclusion from "../src/components/PrevCargaConclusion"
import FormConclusion from "../src/components/FormConclusion"
import FormMateriales from "../src/components/FormMateriales"
import FormHumeda from "../src/components/FormHumeda"
import FormSeco from "../src/components/FormSeco"
import FormPaneles from "../src/components/FormPaneles"
import FormRedAgua from "../src/components/FormRedAgua"
import FormRedGas from "../src/components/FormRedGas"
import FormRedElectricidad from "../src/components/FormRedElectricidad"
import FormAberturas from "../src/components/FormAberturas"
import FormPersonas from "../src/components/FormPersonas"
import FormGremios from "../src/components/FormGremios"
import VerificarObra from "../src/components/VerificarObra"
import PrincipalVista from "../src/components/PrincipalVista"
import FormPrincipalVista from "../src/components/FormPrincipalVista"
import FormMaterialesVista from "../src/components/FormMaterialesVista"
import FormPersonasVista from "../src/components/FormPersonasVista"


const App = () => {

    return(

     
      <Fragment>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/prevCarga" element={<PrevCarga />} />
          <Route path="/formGeneral" element={<FormGeneral />} />
          <Route path="/formVisita" element={<FormVisita />} />
          <Route path="/formPrincipal" element={<PrincipalCargaForm />} />
          <Route path="/pedidoObra" element={<PedidoObra />} />
          <Route path="/prevCargaConclusion" element={<PrevCargaConclusion />} />
          <Route path="/formConclusion" element={<FormConclusion />} />
          <Route path="/formMateriales" element={<FormMateriales />} />
          <Route path="/formPersonas" element={<FormPersonas />} />
          <Route path="/formHumeda" element={<FormHumeda />} />
          <Route path="/formSeco" element={<FormSeco />} />
          <Route path="/formPaneles" element={<FormPaneles />} />
          <Route path="/formRedAgua" element={<FormRedAgua />} />
          <Route path="/formRedGas" element={<FormRedGas />} />
          <Route path="/formRedElectricidad" element={<FormRedElectricidad />} />
          <Route path="/formAberturas" element={<FormAberturas />} />
          <Route path="/formGremios" element={<FormGremios />} />
          <Route path="/verificarObra" element={<VerificarObra />} />
          <Route path="/principalVista" element={<PrincipalVista />} />
          <Route path="/formPrincipalVista" element={<FormPrincipalVista />} />
          <Route path="/formMaterialesVista" element={<FormMaterialesVista />} />
          <Route path="/formPersonasVista" element={<FormPersonasVista />} />


        </Routes>

      </Fragment>

    );
}

export default App;