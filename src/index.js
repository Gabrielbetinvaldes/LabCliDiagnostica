import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import Login from './pages/Login/Login'
import Registro from "./pages/Registro/Registro";
import Dashboard from "./pages/Dashboard/Dashboard";
import CrearExamenes from "./pages/CrearExamenes/CrearExamenes";
import ConsultarExamenes from "./pages/ConsultarExamenes/ConsultarExamenes";
import CrearResultados from "./pages/CrearResultados/CrearResultados";
import ConsultarResultados from "./pages/ConsultarResultados/ConsultarResultados";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
  

ReactDOM.render(
    <React.StrictMode>
    <Router>
    <Routes>
   
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/Registro" element={<Registro/>} /> 
    <Route exact path="/Dashboard" element={<Dashboard/>} /> 
    <Route exact path="/CrearExamenes" element={<CrearExamenes/>} />
    <Route exact path="/ConsultarExamenes" element={<ConsultarExamenes/>} />
    <Route exact path="/CrearResultados" element={<CrearResultados/>} />
    <Route exact path="/ConsultarResultados" element={<ConsultarResultados/>} />
    <Route exact path="/App" element={<App/>} />   
      
    

    
    </Routes>
    </Router>
    </React.StrictMode>
    ,
    document.getElementById('root')
    );
    