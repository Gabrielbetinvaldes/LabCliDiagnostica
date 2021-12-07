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
import EditarExamenes from "./pages/EditarExamenes/EditarExamenes";
import EliminarExamenes from "./pages/EliminarExamenes/EliminarExamenes";
import EditarAgenda from "./pages/EditarAgenda/EditarAgenda";
import EliminarAgenda from "./pages/EliminarAgenda/EliminarAgenda";
import Notificaciones from "./pages/Notificaciones/Notificaciones";



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
                    <Route path="/EditarExamenes" element={<EditarExamenes />} />
                    <Route path="/EliminarExamenes" element={<EliminarExamenes />} />
                    <Route path="/ConsultarExamenes" element={<ConsultarExamenes />} />
                    <Route path="/IngresarResultado" element={<CrearResultados />} />
                    <Route path="/ConsultarResultados" element={<ConsultarResultados />} />
                    <Route path="/CrearAgenda" element={<CrearAgenda />} />
                    <Route path="/EditarAgenda" element={<EditarAgenda />} />
                    <Route path="/EliminarAgenda" element={<EliminarAgenda />} />
                    <Route path="/ConsultarAgenda" element={<ConsultarAgenda />} />
                    <Route path="/AgendaDisponible" element={<AgendaDisponible />} />
                    <Route path="/CancelarCitas" element={<CancelarCitas/>} />
                    <Route path="/Notificaciones" element={<Notificaciones/>} />
                    


                </Routes>
            </BrowserRouter>

        );

    }



}

export default App;
