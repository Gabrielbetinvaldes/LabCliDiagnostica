import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";




class ConsultarExamenes extends React.Component {



    render() {
        return (           
               

            <div>

                    <Header/>
                    <Titulo titulo='Laboratorio Clínico Diagnostica' />


                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                             

                                <form className="user">
                                    <div className="form-group row">

                                    <div className="col-sm-2 mb-3 mb-sm-0">
                                            <h6 class="m-2 font-weight-bold text-success">Tipos De Examenes Medicos</h6>
                                    </div>


                                    <div className="col-sm-7 mb-3 mb-sm-0">
                                          <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                             placeholder="Tipo de examen"/>
                                    </div>

                                        <div className="col-sm-2">
                                         <a href="login.html" className="btn btn-success btn-user btn-block">
                                             Buscar
                                         </a>                                            
                                        </div>


                                    </div>
                                    
                                  
                                   
                                </form>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table " id="dataTable" width="100%" cellspacing="0">
                                        <thead class="table-success">
                                            <tr>
                                                <th>Id Examen</th>
                                                <th>Nombre Del Examen</th>
                                                <th>Rango Minimo</th>
                                                <th>Rango Maximo</th>
                                                <th>Editar</th>
                                                <th>Eliminar</th>
                                            </tr>
                                        </thead>
                                    
                                        <tbody class="table-light">
                                            <tr>
                                                <td>001</td>
                                                <td>Sangre</td>
                                                <td>10</td>
                                                <td>15</td>
                                                <td><a href="#" class="text-decoration-underline">Editar</a></td>
                                                <td><a href="#" class="text-decoration-underline">Eliminar</a></td>
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