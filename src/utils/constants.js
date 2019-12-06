import mainLogo from "assets/logos/baru.png";
import barakaLogo from "assets/logos/baraka.png";
import slbrasasLogo from "assets/logos/santas_las_brasas.png";
import rdBosqueLogo from "assets/logos/resto_del_bosque.png";
import baruEventosLogo from "assets/logos/baru_eventos.png";
import baruViandasLogo from "assets/logos/baru_viandas.png";

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
      slbrasas: slbrasasLogo,
      baruViandas: baruViandasLogo
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
      description:
        "Casamientos, fiestas de 15, cumpleaños, despedidas, reuniones, etc.",
      info: {
        phone: "2915087902"
      }
    },
    baruViandas: {
      title: "Barú Viandas",
      logo: baruViandasLogo,
      description:
        "Viandas escolares, turismo, parques eólicos, particulares y empresariales.",
      info: {
        phone: "2915087902"
      }
    },
    baraka: {
      title: "Baraka",
      logo: barakaLogo,
      description:
        "Tienda de comidas y almacén. Menúes diarios, lunchonette frío y caliente y sistema de venta al peso.",
      info: {
        address: "Alvarado 187",
        schedule: "Lunes a Viernes 10-14hs y 19-22hs; Sábados 10-14hs",
        phone: "2914551814"
      },
      social: {
        instagram: "/barakatiendadecomidas",
        facebook: "Baraka Tienda de comidas y Almacén"
      }
    },
    rdBosque: {
      title: "Resto del Bosque",
      logo: rdBosqueLogo,
      description:
        "Restaurant y delivery, especialidad en pastas caseras, pizzas y empanadas, sushi, platos tradicionales y de autor.",
      info: {
        address: "Bosque Alto",
        schedule: "Todos los días 12-14:30hs y 20-23:30hs",
        phone: "2914075010"
      },
      social: {
        instagram: "/restodelbosque",
        facebook: "Resto del Bosque"
      }
    },
    slBrasas: {
      title: "Santas las Brasas",
      logo: slbrasasLogo,
      description:
        "Parrilla libre, pastas, platos vegetarianos, menú del día, minutas y espacio con pelotero para los niños.",
      info: {
        address: "Complejo Rodovía, Ruta 3, Km 969,5",
        schedule: "Todos los días 12-15:30 y 19:30-0hs",
        phone: "4846869 - 2915087902"
      },
      social: {
        instagram: "/santaslasbrasas",
        facebook: "Santas Las Brasas"
      }
    }
  }
};

export const VIANDAS = {
  title: "Nuestros platos y viandas",
  lunchTypes: {
    transporte: {
      title: "Transporte",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas para transporte.",
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
    compras: {
      title: "Ventas",
      description:
        "Texto descriptivo para ventas",
      icon: faShoppingCart,
      contact: "ventas@barugastronomia.com.ar",
      reverse: false
    },
    proveedores: {
      title: "Compras",
      description: "Texto descriptivo para compras",
      icon: faTruckMoving,
      contact: "compras@barugastronomia.com.ar",
      reverse: true
    },
    administracion: {
      title: "Administración",
      description: "Texto descriptivo para administración",
      contact: "administracion@barugastronomia.com.ar",
      icon: faHandshake,
      reverse: false
    },
    recursos: {
      title: "¿Querés formar parte de nuestro equipo?",
      description: "Escribinos y adjunta tu CV: ",
      contact: "rrhh@barugastronomia.com.ar",
      icon: faUsers,
      reverse: true
    }
  }
};
