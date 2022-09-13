import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import PrevCarga from "../src/components/PrevCarga"
import FormGeneral from "../src/components/FormGeneral"

const App = () => {

    return(

     
      <Fragment>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/prevCarga" element={<PrevCarga />} />
          <Route path="/formGeneral" element={<FormGeneral />} />


        </Routes>

      </Fragment>

    );
}

export default App;
