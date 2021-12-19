import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";
import { useParams, useNavigate } from "react-router-dom";




const AgendaDisponibleId = (props) => {

    let navigate = useNavigate();

    const [agendas, setAgendas] = useState([]);
    const [examenesD, setExamenesD] = useState([]);
    const [agendasId, setAgendasId] = useState([]);
    let { nombre_examen } = useParams();

    useEffect(() => {
        obtener_examen();
        fetch(`http://localhost:8080/api/AgendasExterno/${nombre_examen}`)
            .then((response) => response.json())
            .then((data) => {
                setAgendasId(data);




            });
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

    const click_seleccionar = (e) => {
        e.preventDefault()

        const agenda = {

            _id: e.target._id.value,
            paciente: e.target.paciente.value,
            nombre: e.target.nombre.value,

        }


        seleccionar_examen(agenda);
    }



    const seleccionar_examen = (agenda) => {
        console.log(agenda._id)
        fetch(`http://localhost:8080/api/seleccionar_agenda/${agenda._id}`, {
            method: 'PUT',
            body: JSON.stringify(agenda),
            headers: {
                'Content-Type': 'application/json',

            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                alert('Agenda Seleccionada')
                navigate("/CancelarCitas");

            });
    };



    return (


        <div>

            <Header />
            <Titulo titulo='Laboratorio Clínico Diagnostica' />



            <div className="card shadow mb-4">
                <div className="card-header py-3">



                    <div className="form-group row">

                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <h6 className="m-2 font-weight-bold text-success">Consultar Citas Disponibles</h6>
                        </div>


                        <div className="col-sm-3 mb-3 mb-sm-0 form-group">
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
                <div className="form-group row">


                    <form className="user" onSubmit={click_seleccionar}>

                    
                            <div class="row">
                                {agendasId.map((agenda) => {
                                    return (



                                        <div className="col-sm-4 mb-3 mb-sm-0 form-group">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                placeholder="Id" name="_id" value={agenda._id} />
                                        </div>





                                    );
                                })}
                                <div className="col-sm-4 mb-3 mb-sm-0 form-group">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                        placeholder="Nombres Completos" name="nombre" />
                                </div>
                                <div className="col-sm-4 mb-3 mb-sm-0 form-group">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                        placeholder="Documento De Identidad" name="paciente" />
                                </div>
                            </div>
                  



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
                                    {agendasId.map((agenda) => {
                                        return (
                                            <tr key={agenda._id}>


                                                <td>{agenda.examen}</td>
                                                <td>{agenda.dia}</td>
                                                <td>{agenda.hora}</td>





                                                <td><button type="submit" className="btn btn-success btn-user btn-block">  Seleccionar</button> </td>
                                            </tr>

                                        );
                                    })}

                                </tbody>
                                <tfoot></tfoot>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>


































    )
}




export default AgendaDisponibleId