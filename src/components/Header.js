import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Laboratorio Clinico Diagnostica</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Examenes
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        
                                        <li><a class="dropdown-item" href="#">Crear</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Consultar</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Resultados
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                       
                                        <li><a class="dropdown-item" href="#">Crear</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Consultar</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Notificaciones
                                    </a>
                                    
                                       
                                   
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Agendamiento
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Crear</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Consultar</a></li>
                                    </ul>
                                </li>
                               
                            </ul>
                            <form class="d-flex">
                                
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