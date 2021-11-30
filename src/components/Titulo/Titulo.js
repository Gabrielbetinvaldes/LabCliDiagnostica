import React from "react";
import Style from "./Titulo.module.css"

class Titulo extends React.Component {

    render() {
        return  <h1 className={Style.Titulo}>{this.props.titulo}</h1>
    }
}

export default Titulo