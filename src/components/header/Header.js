import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="Dashboard">Dashboard</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Examenes
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        
                                        <li><a className="dropdown-item" href="CrearExamenes">Crear</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="ConsultarExamenes">Consultar</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Resultados
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                       
                                        <li><a className="dropdown-item" href="IngresarResultado">Ingresar</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="ConsultarResultados">Consultar</a></li>
                                    </ul>
                                </li>
                               
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Agendamiento
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="CrearAgenda">Crear</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Consultar</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Citas Disponibles</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Mis citas</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item ">
                                    <a className="nav-link " href="#" id="" role="button" data-bs-toggle="" aria-expanded="false">
                                       Notificaciones
                                    </a>
                                                                          
                                   
                                </li>
                               
                            </ul>

  
                            <form className="d-flex">
                                
                                <button class ="btn btn-outline-success" type ="submit">Salir</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>

        )
    }



}

export default Header