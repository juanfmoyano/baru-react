// Containers
import QuienesSomos from "containers/QuienesSomos/QuienesSomos";
import Emprendimientos from "containers/Emprendimientos/Emprendimientos";
import Viandas from "containers/ViandasEmpresariales/ViandasEmpresariales";
import Contacto from "containers/Contacto/Contacto";

import { ROUTES_LABELS } from "utils/constants";

const routesInfo = {
  quienesSomos: {
    path: "/",
    component: QuienesSomos,
    exact: true,
    label: ROUTES_LABELS.quienesSomos
  },
  nuestrosEmprendimientos: {
    path: "/emprendimientos",
    component: Emprendimientos,
    exact: false,
    label: ROUTES_LABELS.nuestrosEmprendimientos,
  },
  viandasEmpresariales: {
    path: "/viandas",
    component: Viandas,
    exact: false,
    label: ROUTES_LABELS.viandasEmpresariales,
  },
  contacto: {
    path: "/contacto",
    component: Contacto,
    exact: false,
    label: ROUTES_LABELS.contacto,
  }
};

export function getRoutesInfo() {
  const routesInfoArray = [];
  Object.keys(routesInfo).forEach(route =>
    routesInfoArray.push(routesInfo[route])
  );
  return routesInfoArray;
}
