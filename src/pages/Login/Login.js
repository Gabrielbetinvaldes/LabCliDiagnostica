import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import { useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';



const Login = ({bus}) => {

    let navigate = useNavigate();
 

    const enviar_formulario = e => {

        e.preventDefault()

        const credenciales = {
            correo: e.target.correo.value,
            password: e.target.password.value
        }

        recibir_credenciales(credenciales)
    }

  

    const recibir_credenciales = (credenciales) => {
        fetch("http://localhost:8080/api/login", {
          method: "POST",
          body: JSON.stringify(credenciales),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => {
            if (response.token !== undefined) {
              NotificationManager.info(response.mensaje);
              setTimeout(() => {
                bus(response.token, navigate)
              }, 3000);
              
            } else {
                alert('ey credenciales invalidas')
            }
          });
      };

    return (

        <div className="container">



            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">

                <Titulo titulo='Laboratorio Clínico Diagnostica' />

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block "> <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem,' }}
                                    src="img/Logo.jpeg" alt="..." />  </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h2 text-gray-900 mb-4">Iniciar Sesion</h1>
                                            <h3 className="h6  text-gray-900 mb-4">Por favor, Ingrese su usuario y contraseña</h3>
                                        </div>
                                        <form className="user" onSubmit={enviar_formulario}>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Digite su email" name="correo" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Digite su contraseña" name="password" />
                                            </div>

                                            <button type="submit" className="btn btn-success btn-user btn-block">  Ingresar</button>

                                            <hr />

                                            <a className="small" href="/Registro">Crear una cuenta</a>

                                        </form>

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


export default Login