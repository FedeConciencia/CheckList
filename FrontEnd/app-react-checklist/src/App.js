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


        </Routes>

      </Fragment>

    );
}

export default App;
