import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";




const CancelarCitas =() => {

    const [agendas, setAgendas] = useState([]);
    const [examenesD, setExamenesD] = useState([]);

    useEffect(() => {
        obtener_examen();
        clickBoton();

    });


    let clickBoton = () => {
        fetch("http://localhost:8080/api/Agendas")
            .then((response) => response.json())
            .then((data) => {
                setAgendas(data);
            });
    };

    const obtener_examen = () => {
        fetch("http://localhost:8080/api/Examenes")
            .then((response) => response.json())
            .then((data) => {
                setExamenesD(data);
            });
    };
    const click_eliminar = (e) => {
        const id = e.target.id

        eliminar_examen(id);
    }



    const eliminar_examen = (id_agenda) => {
        fetch(`http://localhost:8080/api/eliminar_agenda/${id_agenda}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                window.location.href = "/ConsultarAgenda";
            });
    };


        return (


            <div>

            <Header />
            <Titulo titulo='Laboratorio Clínico Diagnostica' />



            <div className="card shadow mb-4">
                <div className="card-header py-3">



                    <div className="form-group row">

                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <h6 className="m-2 font-weight-bold text-success">Consultar Citas Disponibles</h6>
                        </div>


                        <div className="col-sm-5 mb-3 mb-sm-0 form-group">
                            <div class="dropdown">
                                <button class="btn btn-succes dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tipos De Examenes Medicos
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                    {examenesD.map((examenD) => {
                                        return (
                                            <a class="dropdown-item" href={`/AgendaDisponibleId/${examenD.nombre}`}>{examenD.nombre}</a>

                                        );
                                    })}

                                </div>
                            </div>
                        </div>






                    </div>




                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table " id="dataTable" width="100%" cellspacing="0">
                            <thead className="table-success">
                                <tr>
                                   
                                    <th>Nombre Del Examen</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Seleccionar</th>
                                    
                                </tr>
                            </thead>

                            <tbody className="table-light">
                                {agendas.map((agenda) => {
                                    return (
                                        <tr key={agenda._id}>
                                           
                                            <td>{agenda.examen}</td>
                                            <td>{agenda.dia}</td>
                                            <td>{agenda.hora}</td>

     


                                            <td><button id={agenda._id} onClick={click_eliminar} href="/ConsultarAgenda" className="btn btn-success btn-user btn-block">  Seleccionar</button> </td>
                                        </tr>

                                    );
                                })}

                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
            </div>



















        </div>














        )
    }




export default CancelarCitas