import React, { Component } from "react";
import "./NotFound.scss";
class Contacto extends Component {
  render() {
    return (
      <section className="NotFound">
        <div className="Content">
          <div className="Content__Section" />
          <div className="Content__Section">
            <h2 className="Content__Text">
              La dirección que está intentando acceder no es válida.
            </h2>
            <h2 className="Content__Text">
              Por favor, vuelva a la página anterior o seleccione alguna de las
              opciones válidas del menú.
            </h2>
          </div>
          <div className="Content__Section" />
        </div>
      </section>
    );
  }
}

export default Contacto;
