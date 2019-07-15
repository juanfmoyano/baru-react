import React, { Component } from "react";
import "./Contacto.scss";

import { CONTACTO } from "utils/constants";

import Area from "./Area/Area";

class Contacto extends Component {
  render() {
    return (
      <section className="Contacto">
        <div className="Content">
          <h2 className="Content__Title"> {CONTACTO.title}</h2>
          <div className="Content__Section">
            <Area
              title={CONTACTO.sections.servicios.title}
              description={CONTACTO.sections.servicios.description}
              icon={CONTACTO.sections.servicios.icon}
            />            
            <Area
              title={CONTACTO.sections.proveedores.title}
              description={CONTACTO.sections.proveedores.description}
              icon={CONTACTO.sections.proveedores.icon}
              reverse={true}
            />
            <Area
              title={CONTACTO.sections.administracion.title}
              description={CONTACTO.sections.administracion.description}
              icon={CONTACTO.sections.administracion.icon}
            />
            <Area
              title={CONTACTO.sections.recursos.title}
              description={CONTACTO.sections.recursos.description}
              icon={CONTACTO.sections.recursos.icon}
              reverse={true}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Contacto;
