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
                                    src="img/logo.jpeg" alt="..." /></div>
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Consulta De Examenes</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group row">
<<<<<<< HEAD
                                                <div className="col-sm-12 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Id Paciente" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect1">Tipo Examen</label>
                                                    <select class="form-control" id="exampleFormControlSelect1" placeholder="Id Paciente">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
=======

                                                <div class="form-group">

                                                    <select class="form-select" id="exampleFormControlSelect1" >
                                                        <option selected>Seleccionar Examen</option>
                                                        <option>Sangre</option>
                                                        <option>Parcial De Orina</option>
                                                        <option>Perfil Lipidico</option>
                                                        <option>Hemograma Completo</option>
                                                        <option>Glicemia</option>
>>>>>>> e6efa20fbf13688d199ff4bc01ec5211b1b68e96
                                                    </select>
                                                </div>
                                            </div>


<<<<<<< HEAD
                                            <a href="login.html" className="btn btn-success btn-user btn-block">
                                                Consultar
                                            </a>
                                            <hr />
=======

>>>>>>> e6efa20fbf13688d199ff4bc01ec5211b1b68e96

                                        </form>
                                        <hr />

                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table " id="dataTable" width="100%" cellspacing="0">
                                                    <thead class="table-success">
                                                        <tr>
                                                            <th>Id Paciente</th>
                                                            <th>Nombre Del Examen</th>
                                                            <th>Rango Minimo</th>
                                                            <th>Rango Maximo</th>
                                                            <th>Resultado</th>
<<<<<<< HEAD
                                                            
=======


>>>>>>> e6efa20fbf13688d199ff4bc01ec5211b1b68e96
                                                        </tr>
                                                    </thead>

                                                    <tbody class="table-light">
                                                        <tr>
                                                            <td>001</td>
                                                            <td>Sangre</td>
<<<<<<< HEAD
                                                            <td>10</td>
                                                            <td>15</td>
                                                            <th>Optimo</th>
                                                            <th>Descargar</th>
=======
                                                            <td>2021/11/01</td>
                                                            <td>07:00 PM</td>
                                                            <td>Pendiente</td>


>>>>>>> e6efa20fbf13688d199ff4bc01ec5211b1b68e96
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