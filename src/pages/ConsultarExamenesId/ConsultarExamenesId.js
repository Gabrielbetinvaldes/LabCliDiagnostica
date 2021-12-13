import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";




const ConsultarExamenesId = (props) => {

    const [examenes, setExamenes] = useState([]);
    const [examenesD, setExamenesD] = useState([]);
    const [examenesId, setExamenesId] = useState([]);

    let { id_examen } = useParams();



    useEffect(() => {
        obtener_examen();
        fetch(`http://localhost:8080/api/Examenes/${id_examen}`)
        .then((response) => response.json())
        .then((data) => {
            setExamenesId(data);
        });
      
        
    });

  

    const obtener_examen = () => {
        fetch("http://localhost:8080/api/Examenes")
            .then((response) => response.json())
            .then((data) => {
                setExamenesD(data);
            });
    };

    const click_eliminar = (e) => {
        const id =  e.target.id
                               
        eliminar_examen(id);
      }



    const eliminar_examen = (id_examen) => {
        fetch(`http://localhost:8080/api/eliminar_examen/${id_examen}`, {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            window.location.href = "/ConsultarExamenes";
          });
      };


    return (


        <div>

            <Header />
            <Titulo titulo='Laboratorio Clínico Diagnostica' />



            <div className="card shadow mb-4">
                <div className="card-header py-3">



                    <div className="form-group row">

                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <h6 className="m-2 font-weight-bold text-success">Tipos De Examenes Medicos</h6>
                        </div>


                        <div className="col-sm-5 mb-3 mb-sm-0 form-group">
                            <div class="dropdown">
                                <button class="btn btn-succes dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tipos De Examenes Medicos
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                    {examenesD.map((examenD) => {
                                        return (
                                            <a class="dropdown-item" href={`/ConsultarExamenes/${examenD._id}`}>{examenD.nombre}</a>
                                           
                                        );
                                    })}
                                  
                                </div>
                            </div>
                        </div>



              

                    </div>




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
                                
                                   
                                        <tr key={examenesId._id}>
                                            <td>{examenesId._id}</td>
                                            <td>{examenesId.nombre}</td>
                                            <td>{examenesId.rangoMin}</td>
                                            <td>{examenesId.rangoMax}</td>
                                            <td><button type="submit"  className="btn btn-success btn-user btn-block">  Editar </button> </td>

                                          
                                            <td><button id={examenesId._id} onClick={click_eliminar} href="/ConsultarExamenes" className="btn btn-success btn-user btn-block">  Eliminar </button> </td>
                                        </tr>

                               

                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
            </div>



















        </div>

    )
}




export default ConsultarExamenesId;