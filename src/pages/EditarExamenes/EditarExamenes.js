import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";





const EditarExamenes = (props) => {

    const input_id = React.createRef();
    const input_nombre = React.createRef();
    const input_max = React.createRef();
    const input_min = React.createRef();
  
    let { id_examen } = useParams();

    useEffect(() => {

        fetch(`http://localhost:8080/api/Examenes/${id_examen}`)
            .then((response) => response.json())
            .then((data) => {
                asignar_valores(data);
            });


    });
    const asignar_valores = (data) => {
        input_id.current.value = data._id
        input_nombre.current.value = data.nombre
        input_min.current.value = data.rangoMin
        input_max.current.value = data.rangoMax
  
    }


    const enviar_formulario = (e) => {
        e.preventDefault()
    
          const nuevos_datos = {
              _id: e.target._id.value,
              nombre: e.target.nombre.value,
              rangoMin: e.target.rangoMin.value,
              rangoMax: e.target.rangoMax.value
          }
    
          recibir_nuevos_datos(nuevos_datos._id,nuevos_datos)
      };


      const recibir_nuevos_datos = (id_examen, datos) => {
      
        fetch(`http://localhost:8080/api/actualizar_examen/${id_examen}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers:{
          'Content-Type': 'application/json',
           }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(async response => {
        
        alert('Examen Editado')
      });
    }

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
                                        <h1 className="h4 text-gray-900 mb-4">Editar Examenes De Laboratorio</h1>
                                    </div>
                                    <form className="user" onSubmit={enviar_formulario}>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="Id Examen" ref={input_id}  name="_id"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Nombre del Examen" ref={input_nombre} name="nombre" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="Rango Minimo" ref={input_min} name="rangoMin" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Rango Maximo"  ref={input_max} name="rangoMax" />
                                            </div>
                                        </div>

                                         <button type="submit"  className="btn btn-success btn-user btn-block"> Editar </button>   
                                       
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




export default EditarExamenes