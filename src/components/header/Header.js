import React from "react";


const Header = () =>  {


        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/Dashboard">Dashboard</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Usuarios
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        <li><a className="dropdown-item" href="/RegistroAdmin">Crear</a></li>
                                       
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Examenes
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                     
                                            
                                        <li><a className="dropdown-item" href="/CrearExamenes">Crear</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/ConsultarExamenes">Consultar</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Resultados
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        <li><a className="dropdown-item" href="/IngresarResultado">Ingresar</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/ConsultarResultados">Consultar</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Agendamiento
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/CrearAgenda">Crear</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/ConsultarAgenda">Consultar</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/AgendaDisponible">Citas Disponibles</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/CancelarCitas">Cancelar Citas</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item ">
                                    <a className="nav-link " href="/Notificaciones" id="" role="button" data-bs-toggle="" aria-expanded="false">
                                        Notificaciones

                                    </a>


                                </li>

                                <li className="nav-item ">
                                    <a className="nav-link " href="/Notificaciones" id="" role="button" data-bs-toggle="" aria-expanded="false">


                                        <i class="fas fa-envelope fa-fw"></i>

                                        <span class="badge badge-danger badge-counter">1</span>
                                    </a>


                                </li>

                            </ul>



                            <form className="d-flex">

                                <a className="nav-link " style={{ color: 'white' }} href="" id="" role="button" data-bs-toggle="" aria-expanded="false">
                                    Gabriel Betin Valdes
                                </a>

                                <img class="rounded-circle" style={{ width: '50px' }} src="img/undraw_profile_2.svg" />
                                <button class="btn btn-outline-success" type="submit"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>Salir</button>

                            </form>
                        </div>
                    </div>
                </nav>




            </div>

        )
    }




export default Header