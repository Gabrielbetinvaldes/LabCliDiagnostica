import React from "react";
import Style from "./Imagen.module.css"

class Imagen extends React.Component {

    render() {

        return <img className={Style.imagen} src={this.props.src} ></img>    
        

        
    }
}

export default Imagen



