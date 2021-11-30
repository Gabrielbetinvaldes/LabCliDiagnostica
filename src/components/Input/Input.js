import React from "react";
import Style from "./Input.module.css"

class Input extends React.Component {

    render() {
        return   <input type={this.props.type} class={this.props.class} id={this.props.id}placeholder={this.props.placeholder}></input>
    }
}


export default Input