import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";

class ConsultarResultados extends React.Component {


    render() {
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
                                        <form className="user">
                                            <div className="form-group row">
                                                
                                                <div class="form-group">
                                                    
                                                    <select class="form-select" id="exampleFormControlSelect1" >
                                                    <option selected>Seleccionar Examen</option>
                                                    <option>Sangre</option>
                                                    <option>Parcial De Orina</option>
                                                    <option>Perfil Lipidico</option>
                                                    <option>Hemograma Completo</option>
                                                    <option>Glicemia</option>
                                                    </select>
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

                                                    <tbody class="table-light">
                                                        <tr>
                                                            <td>Manuel Burbano</td>
                                                            <td>Sangre</td>
                                                            <td>2021/11/01</td>
                                                            <td>07:00 PM</td>
                                                            <td>Pendiente</td>
                                                           
                                                            
                                                        </tr>



                                                    </tbody>
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

}
export default ConsultarResultados