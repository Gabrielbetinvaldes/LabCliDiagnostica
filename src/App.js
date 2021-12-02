import React from "react";
import Login from './pages/Login/Login'
import Registro from "./pages/Registro/Registro";
import Dashboard from "./pages/Dashboard/Dashboard";
import CrearExamenes from "./pages/CrearExamenes/CrearExamenes";
import ConsultarExamenes from "./pages/ConsultarExamenes/ConsultarExamenes";
import CrearResultados from "./pages/CrearResultados/CrearResultados";
import ConsultarResultados from "./pages/ConsultarResultados/ConsultarResultados";
import CrearAgenda from "./pages/CrearAgenda/CrearAgenda";
import ConsultarAgenda from "./pages/ConsultarAgenda/ConsultarAgenda";
import AgendaDisponible from "./pages/AgendaDisponible/AgendaDisponible";
import CancelarCitas from "./pages/CancelarCitas/CancelarCitas";


import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route path="/Registro" element={<Registro />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/CrearExamenes" element={<CrearExamenes />} />
                    <Route path="/ConsultarExamenes" element={<ConsultarExamenes />} />
                    <Route path="/IngresarResultado" element={<CrearResultados />} />
                    <Route path="/ConsultarResultados" element={<ConsultarResultados />} />
                    <Route path="/CrearAgenda" element={<CrearAgenda />} />
                    <Route path="/ConsultarAgenda" element={<ConsultarAgenda />} />
                    <Route path="/AgendaDisponible" element={<AgendaDisponible />} />
                    <Route path="/CancelarCitas" element={<CancelarCitas/>} />
                  


                </Routes>
            </BrowserRouter>

        );

    }



}

export default App;
