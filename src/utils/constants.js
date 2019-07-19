import mainLogo from "assets/logos/baru.png";
import barakaLogo from "assets/logos/baraka.png";
import slbrasasLogo from "assets/logos/santas_las_brasas.png";
import rdBosqueLogo from "assets/logos/resto_del_bosque.png";
import baruEventosLogo from "assets/logos/baru_eventos.png";

// ----- ICONS -----
// SideMenu

import {
  faTimes,
  faSitemap,
  faSeedling,
  faUtensils,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

// Quienes somos
import { faListAlt, faBook, faEye } from "@fortawesome/free-solid-svg-icons";

// Viandas - Cards
import {
  faGraduationCap,
  faBuilding,
  faBus,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

// Viandas - Slider
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Contacto
import {
  faHandshake,
  faShoppingCart,
  faTruckMoving,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

// ----------

export const HEADER_LABELS = {
  title: "Barú Gastronomía"
};

export const FOOTER_LABELS = {
  copyright: "Copyright © Baru Gastronomía",
  design: "Design & Dev. By Attic Developers",
  info: "2019"
};

export const ROUTES_LABELS = {
  quienesSomos: "¿Quiénes somos?",
  nuestrosEmprendimientos: "Servicios y emprendimientos",
  viandasEmpresariales: "Nuestras viandas",
  contacto: "Contacto"
};

export const SIDEMENU = {
  title: "Barú gastronomía",
  icon: faTimes,
  itemIcons: {
    quienesSomos: faSitemap,
    nuestrosEmprendimientos: faSeedling,
    viandasEmpresariales: faUtensils,
    contacto: faEnvelope
  }
};

export const QUIENES_SOMOS = {
  presentation: {
    slogan: '"Sólo es necesario mostrar otro camino"',
    mainLogo: mainLogo,
    secondaryLogos: {
      baruEventos: baruEventosLogo,
      baraka: barakaLogo,
      rdBosque: rdBosqueLogo,
      slbrasas: slbrasasLogo
    }
  },
  organization: {
    title: "Quiénes somos",
    description:
      "Amantes de la gastronomía, y sumado a nuestra vocación de servicios, hemos dado nacimiento a BARU Desarrollos Gastronómicos & Gastronomía Industrial. Este es un espacio en donde, partiendo desde la gastronomía, brindamos servicios de catering, comedores para empresas y distribución de alimentos y viandas empresariales.",
    cards: {
      mission: {
        title: "Misión",
        description:
          "Poder ofrecer a nuestros comensales, diferentes opciones gastronómicas en el marco del tipo de servicio que nos sea requerido.",
        icon: faListAlt
      },
      compromise: {
        title: "Compromiso y filosofía",
        description:
          "Consideramos que la gastronomía representa en nuestra empresa, las raíces que nos adhieren a nuestro desarrollo laboral y económico. Por otro lado, la honestidad es la base filosófica sobre la que reposan nuestros sueños. Entendemos a la gastronomía en un concepto amplio, que va más allá del sabor o aroma de un plato en particular, pues buscamos dejar una experiencia única-de todos los sentidos- en nuestros comensales.",
        icon: faBook
      },
      vision: {
        title: "Visión",
        description:
          "Convertirnos en una empresa distinguida y renombrada en el ambiente gastronómico, tanto por los sistemas de trabajo aplicables como así también por la calidad de nuestros servicios, pudiendo en ese sentido, lograr la atención de los más exigentes.",
        icon: faEye
      }
    }
  }
};

export const SERVICIOS = {
  title: "Nuestros servicios",
  services: {
    baruEventos: {
      title: "Barú Eventos",
      logo: baruEventosLogo,
      description: "Descripción para Barú Eventos",
      info: {
        address: "Complejo Rodovía, Ruta 3, Km 969,5",
        schedule: "12 - 15:30, 19:30 - 00:30",
        phone: "4846869"
      },
      social: {
        instagram: "/santaslasbrasas",
        facebook: "/santaslasbrasas"
      }
    },
    baraka: {
      title: "Baraka",
      logo: barakaLogo,
      description: "Descripción para Baraka",
      info: {
        address: "Complejo Rodovía, Ruta 3, Km 969,5",
        schedule: "12 - 15:30, 19:30 - 00:30",
        phone: "4846869"
      },
      social: {
        instagram: "/santaslasbrasas",
        facebook: "/santaslasbrasas"
      }
    },
    rdBosque: {
      title: "Resto del Bosque",
      logo: rdBosqueLogo,
      description: "Descripción para Resto del Bosque",
      info: {
        address: "Complejo Rodovía, Ruta 3, Km 969,5",
        schedule: "12 - 15:30, 19:30 - 00:30",
        phone: "4846869"
      },
      social: {
        instagram: "/santaslasbrasas",
        facebook: "/santaslasbrasas"
      }
    },
    slBrasas: {
      title: "Santas las Brasas",
      logo: slbrasasLogo,
      description: "Descripción para Santas las Brasas",
      info: {
        address: "Complejo Rodovía, Ruta 3, Km 969,5",
        schedule: "12 - 15:30, 19:30 - 00:30",
        phone: "4846869"
      },
      social: {
        instagram: "/santaslasbrasas",
        facebook: "/santaslasbrasas"
      }
    }
  }
};

export const VIANDAS = {
  title: "Nuestras viandas",
  lunchTypes: {
    transporte: {
      title: "Transporte",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas para transporte",
      icon: faBus
    },
    empresas: {
      title: "Empresas",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas para empresas",
      icon: faBuilding
    },
    particulares: {
      title: "Particulares",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas particulares",
      icon: faUserAlt
    },
    egresados: {
      title: "Egresados",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas para egresados",
      icon: faGraduationCap
    }
  },
  icons: {
    backward: faArrowLeft,
    forward: faArrowRight
  }
};

export const CONTACTO = {
  title: "Contacto",
  sections: {
    servicios: {
      title: "Servicios",
      description: "Texto que describa servicios",
      icon: faShoppingCart,
      reverse: false,
      class: "Servicios"
    },
    proveedores: {
      title: "Proveedores",
      description: "Texto que describa proveedores",
      icon: faTruckMoving,
      reverse: true,
      class: "Proveedores"
    },
    administracion: {
      title: "Administración",
      description: "Texto que describa administración",
      icon: faHandshake,
      reverse: false,
      class: "Administracion"
    },
    recursos: {
      title: "Recursos Humanos",
      description: "Texto que describa recursos humanos",
      icon: faUsers,
      reverse: true,
      class: "Recursos"
    }
  }
};
