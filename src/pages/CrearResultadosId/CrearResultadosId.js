import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";
import { useParams, useNavigate } from "react-router-dom";

const CrearResultadosId = (props) => {

    let { id_agenda } = useParams();
 
    const [agendas, setAgendas] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8080/api/AgendasIdIngresar/${id_agenda}`)
            .then((response) => response.json())
            .then((data) => {
                setAgendas(data);
               
            });

    });
    const enviar_formulario = e => {
        e.preventDefault()

        const cedPaciente = {
            resultado: e.target.resultado.value,
            _id: e.target._id.value,
        }

        clickBoton(cedPaciente._id,cedPaciente)


    }



    let clickBoton = (id_agenda,datos) => {
        fetch(`http://localhost:8080/api/ingresar_resultado/${id_agenda}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(async response => {

                alert('Resultado registrado')
            });


    };





    return (
        <div>

            <Header />
            <Titulo titulo='Laboratorio Clínico Diagnostica' />
            <div className="container">




                <div className="card o-hidden border-0 shadow-lg my-5">


                    <div className="card-body p-0">

                        <div className="row">
                            <div className="col-lg-4 d-none d-lg-block "> <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem,' }}
                                src="img/prueba-de-sangre.png" alt="..." /></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Consulta De Examenes</h1>
                                    </div>
                                    <form className="user" onSubmit={enviar_formulario}>

                                        <div className="form-group row">

                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Id" name="_id" value = {agendas._id} />
                                            </div>


                                            <div className="col-sm-3">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Resultado" name="resultado" />
                                            </div>

                                            <div className="col-sm-3">

                                                <button type="submit" className="btn btn-success btn-user btn-block"> Consultar</button>
                                            </div>

                                        </div>



                                    </form>
                                    <hr />

                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table " id="dataTable" width="100%" cellspacing="0">
                                                <thead class="table-success">
                                                    <tr>
                                                        <th>Paciente</th>
                                                        <th>Tipo De Examen</th>
                                                        <th>Fecha</th>
                                                        <th>Hora</th>
                                                        <th>Resultado</th>


                                                    </tr>
                                                </thead>

                                                <tbody className="table-light">
                                                   
                                                      
                                                            <tr key={agendas._id}>

                                                                <td>{agendas.nombre}</td>
                                                                <td>{agendas.examen}</td>
                                                                <td>{agendas.hora}</td>
                                                                <td>{agendas.dia}</td>
                                                                <td>{agendas.resultado}</td>

                                                            </tr>

                                                     
                                                 

                                                </tbody>
                                                <tfoot></tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )



}



export default CrearResultadosId