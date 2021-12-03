import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";




class ConsultarExamenes extends React.Component {



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
                                    <h6 className="m-2 font-weight-bold text-success">Tipos De Examenes Medicos</h6>
                                </div>


                                <div className="col-sm-7 mb-3 mb-sm-0 form-group">
                                    <form className="user">

                                        <select className="form-select" id="exampleFormControlSelect1" >
                                            <option selected>Seleccionar Examen</option>
                                            <option>Sangre</option>
                                            <option>Parcial De Orina</option>
                                            <option>Perfil Lipidico</option>
                                            <option>Hemograma Completo</option>
                                            <option>Glicemia</option>
                                        </select>

                                    </form>
                                </div>

                                <div className="col-sm-2">
                                    <a href="login.html" className="btn btn-success btn-user btn-block">
                                        Mostrar Todos
                                    </a>
                                </div>


                            </div>



                        </form>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table " id="dataTable" width="100%" cellspacing="0">
                                <thead className="table-success">
                                    <tr>
                                        <th>Id Examen</th>
                                        <th>Nombre Del Examen</th>
                                        <th>Rango Minimo</th>
                                        <th>Rango Maximo</th>
                                        <th>Editar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>

                                <tbody className="table-light">
                                    <tr>
                                        <td>001</td>
                                        <td>Sangre</td>
                                        <td>10</td>
                                        <td>15</td>
                                        <td><a href="EditarExamenes" className="text-decoration-underline">Editar</a></td>
                                        <td><a href="EliminarExamenes" className="text-decoration-underline">Eliminar</a></td>
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

export default ConsultarExamenes