import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";




class EliminarExamenes extends React.Component {



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
                                    src="img/examen-medico.png" alt="..." /></div>
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Eliminar Examenes De Laboratorio</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Id Examen" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                        placeholder="Nombre del Examen" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Rango Minimo" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                        placeholder="Rango Maximo" />
                                                </div>
                                            </div>


                                            <a href="login.html" className="btn btn-success btn-user btn-block">
                                                Eliminar
                                            </a>
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


}

export default EliminarExamenes