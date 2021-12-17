import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import Login from './pages/Login/Login'
import Registro from "./pages/Registro/Registro";
import Dashboard from "./pages/Dashboard/Dashboard";
import CrearExamenes from "./pages/CrearExamenes/CrearExamenes";
import ConsultarExamenes from "./pages/ConsultarExamenes/ConsultarExamenes";
import ConsultarExamenesId from "./pages/ConsultarExamenesId/ConsultarExamenesId";
import CrearResultados from "./pages/CrearResultados/CrearResultados";
import ConsultarResultados from "./pages/ConsultarResultados/ConsultarResultados";
import CrearAgenda from "./pages/CrearAgenda/CrearAgenda";
import ConsultarAgenda from "./pages/ConsultarAgenda/ConsultarAgenda";
import ConsultarAgendaId from "./pages/ConsultarAgendaId/ConsultarAgendaId";
import AgendaDisponible from "./pages/AgendaDisponible/AgendaDisponible";
import AgendaDisponibleId from "./pages/AgendaDisponibleId/AgendaDisponibleId";
import CancelarCitas from "./pages/CancelarCitas/CancelarCitas";
import EditarExamenes from "./pages/EditarExamenes/EditarExamenes";
import EliminarExamenes from "./pages/EliminarExamenes/EliminarExamenes";
import EditarAgenda from "./pages/EditarAgenda/EditarAgenda";
import EliminarAgenda from "./pages/EliminarAgenda/EliminarAgenda";
import Notificaciones from "./pages/Notificaciones/Notificaciones";
import RegistroAdmin from "./pages/RegistroAdmin/RegistroAdmin";





const App = () => {
    const [token, setToken] = useState("");

    const recibir_token = (token, navegacion) => {
        setToken(token);
        navegacion("/Dashboard");
    };

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login bus={recibir_token}/>} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/RegistroAdmin" element={<RegistroAdmin />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/CrearExamenes" element={<CrearExamenes />} />
                <Route path="/EditarExamenes/:id_examen" element={<EditarExamenes />} />
                <Route path="/EliminarExamenes" element={<EliminarExamenes />} />
                <Route path="/ConsultarExamenes" element={<ConsultarExamenes />} />
                <Route path="/ConsultarExamenes/:id_examen" element={<ConsultarExamenesId />} />
                <Route path="/IngresarResultado" element={<CrearResultados />} />
                <Route path="/ConsultarResultados" element={<ConsultarResultados />} />
                <Route path="/CrearAgenda" element={<CrearAgenda />} />
                <Route path="/EditarAgenda/:id_agenda" element={<EditarAgenda />} />
                <Route path="/EliminarAgenda" element={<EliminarAgenda />} />
                <Route path="/ConsultarAgenda" element={<ConsultarAgenda />} />
                <Route path="/ConsultarAgendaId/:nombre_examen" element={<ConsultarAgendaId />} />
                <Route path="/AgendaDisponible" element={<AgendaDisponible />} />
                <Route path="/AgendaDisponibleId/:nombre_examen" element={<AgendaDisponibleId />} />
                <Route path="/CancelarCitas" element={<CancelarCitas />} />
                <Route path="/Notificaciones" element={<Notificaciones />} />



            </Routes>
        </BrowserRouter>

    );

}


export default App;
