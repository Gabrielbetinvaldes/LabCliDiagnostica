import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";




class Notificaciones extends React.Component {



    render() {
        return (


            <div>

                <Header />
                <Titulo titulo='Laboratorio Clínico Diagnostica' />

                <div className="card shadow mb-4">
                    <div className="card-header py-3">


                        <form className="user">
                            <div className="form-group row">

                                <div className="col-sm-2 mb-3 mb-sm-0">
                                    <h6 className="m-2 font-weight-bold text-success">Buzon De Notificaciones</h6>
                                </div>




                            </div>



                        </form>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table " id="dataTable" width="100%" cellspacing="0">
                                <thead className="table-success">
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Notificaciones</th>
                                    </tr>
                                </thead>

                                <tbody className="table-light">
                                    <tr>
                                        <td>2021/12/01</td>
                                        <td>07:00 PM</td>
                                        <td>Su cita para la toma de muestra de sangre fue asignada para el dia sabado 03 De Diciembte del 2021 a las 6:30 AM</td>

                                    </tr>



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



            </div>















        )
    }


}

export default Notificaciones