import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import { useNavigate } from 'react-router-dom';


const RegistroAdmin = ({bus})  => {

    let navigate = useNavigate();
    const enviar_formulario = (e) => {
        e.preventDefault()

        const usuario = {
            nombre: e.target.nombre.value,
            cedula: e.target.cedula.value,
            correo: e.target.correo.value,
            rol: e.target.rol.value,
            password: e.target.password.value,
          
        }

        datos_usuario(usuario)

    }

    const datos_usuario = (usuario) => {
        fetch("http://localhost:8080/api/crear_usuario", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                navigate("/RegistroAdmin");
                alert('Usuario Creado')
            });

    }
    return (

        <div className="container">

            <Titulo titulo='Laboratorio Clínico Diagnostica' />

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block "> <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem,' }}
                            src="img/Logo.jpeg" alt="..." /></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Registro Usuario</h1>
                                </div>
                                <form className="user" onSubmit={enviar_formulario} >
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                placeholder="Nombres" name="nombre" />


                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                placeholder="Documento de identidad"  name="cedula"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Direccion de email"   name="correo"/>
                                    </div>
                                    <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user"
                                                id="exampleLastName" placeholder="Rol" name="rol" />
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña" name="password" />
                                        </div>

                                    </div>

                                    <button type="submit"  className="btn btn-success btn-user btn-block"> Registrar Cuenta</button>

                                    <hr />

                                </form>
                                <hr />


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>






    )



}

export default RegistroAdmin