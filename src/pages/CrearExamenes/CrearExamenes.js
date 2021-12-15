import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";




const CrearExamenes = ({ token }) => {

    let navigate = useNavigate();



    const enviar_formulario = (e) => {
        e.preventDefault()

        const examen = {
            nombre: e.target.nombre.value,
            rangoMin: e.target.minimo.value,
            rangoMax: e.target.maximo.value,
          
        }

        datos_examen(examen)

    }

    const datos_examen = (examen) => {
        fetch("http://localhost:8080/api/crear_examen", {
            method: "POST",
            body: JSON.stringify(examen),
            headers: {
                "Content-Type": "application/json",
                'auth-token-jwt': token
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                navigate("/CrearExamenes");
                alert('Examen Creado')

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
                                src="img/examen-medico.png" alt="..." /></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Ingresar Examenes De Laboratorio</h1>
                                    </div>
                                    <form className="user" onSubmit={enviar_formulario}>
                                        <div className="form-group row">

                                            <input type="text" className="form-control form-control-user" id="nombreExamen"
                                                placeholder="Nombre del Examen" name="nombre" />

                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="minimoExamen"
                                                    placeholder="Rango Minimo" name="minimo" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="maximoExamen"
                                                    placeholder="Rango Maximo" name="maximo" />
                                            </div>
                                        </div>



                                        <button type="submit" className="btn btn-success btn-user btn-block">  Crear examen </button>
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



export default CrearExamenes