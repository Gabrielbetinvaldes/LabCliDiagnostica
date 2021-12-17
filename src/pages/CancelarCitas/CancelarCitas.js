import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";




const CancelarCitas = ({bus}) => {

    const [agendas, setAgendas] = useState([]);
    
    const enviar_formulario = e => {
        e.preventDefault()

        const cedPaciente = {
            paciente: e.target.paciente.value,            
        }

        clickBoton(cedPaciente.paciente)
       
    }
 


    let clickBoton = (cedula) => {
        fetch(`http://localhost:8080/api/AgendasExterno/${cedula}`)
            .then((response) => response.json())
            .then((data) => {
                setAgendas(data);
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
                        <form className="user" onSubmit={enviar_formulario}>

                            <div className="form-group row">

                                <div className="col-sm-2 mb-3 mb-sm-0">
                                    <h6 className="m-2 font-weight-bold text-success">Cancelar citas</h6>
                                </div>

                                <div className="col-sm-4">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                        placeholder="Documento De Identidad" name = "paciente" />
                                </div>

                                <div className="col-sm-4">

                                    <button type="submit" className="btn btn-success btn-user btn-block"> Consultar</button>
                                </div>

                            </div>

                        </form>


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




                                            <td><button id={agenda._id} onClick={click_eliminar} href="/ConsultarAgenda" className="btn btn-success btn-user btn-block"> Cancelar cita</button> </td>
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