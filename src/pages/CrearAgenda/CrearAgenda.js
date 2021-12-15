
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';




const CrearAgenda = ({ token }) => {

    const [examenesD, setExamenesD] = useState([]);

    useEffect(() => {
        obtener_examen();


    });


    const obtener_examen = () => {
        fetch("http://localhost:8080/api/Examenes")
            .then((response) => response.json())
            .then((data) => {
                setExamenesD(data);
            });
    };

    let navigate = useNavigate();



    const enviar_formulario = (e) => {
        e.preventDefault()

        const agenda = {

            examen:"",
            dia: e.target.fecha.value,
            hora: e.target.hora.value,
            paciente: "",
            nombre: "",
            estado: "Disponible",
            resultado: "Pendiente",


        }

        datos_agenda(agenda)

    }

    const datos_agenda = (agenda) => {
        fetch("http://localhost:8080/api/crear_agenda", {
            method: "POST",
            body: JSON.stringify(agenda),
            headers: {
                "Content-Type": "application/json",
                'auth-token-jwt': token
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                navigate("/CrearAgenda");
                alert('Agenda Creada')

            });

    }



    return (


        <div>

            <Header />
            <Titulo titulo='Laboratorio Clínico Diagnostica' />

            <div className="container">




                <div className="card o-hidden border-0 shadow-lg my-5">


                    <div className="card-body p-0">

                        <div className="row">
                            <div className="col-lg-4 d-none d-lg-block "> <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem,' }}
                                src="img/calendario.png" alt="..." /></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Ingresar Agenda</h1>
                                    </div>
                                    <form className="user" onSubmit={enviar_formulario}>
                                        <div className="form-group row">

                                            <div className="col-sm-12">
                                                <div class="form-group">

                                                    <select name="fecha" class="form-select" id="exampleFormControlSelect1" >
                                                        <option selected>Seleccionar Examen</option>

                                                        {examenesD.map((examenD) => {
                                                            return (
                                                                
                                                                <option vakue="nombre" value= {examenD.nombre}>{examenD.nombre}</option>
                                                            );
                                                        })}
                                                        
                                                      
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="date" className="form-control form-control-user" id="fecha"
                                                    name="fecha" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="time" className="form-control form-control-user" id="hora"
                                                    name="hora" />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-success btn-user btn-block">  Crear Agenda </button>

                                        <hr />

                                    </form>
                                    <hr />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>















    )
}




export default CrearAgenda