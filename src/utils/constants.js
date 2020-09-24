import mainLogo from "assets/logos/baru.png";
import barakaLogo from "assets/logos/baraka.png";
import slbrasasLogo from "assets/logos/santas_las_brasas.png";
import rdBosqueLogo from "assets/logos/resto_del_bosque.png";
import baruEventosLogo from "assets/logos/baru_eventos.png";
import baruViandasLogo from "assets/logos/baru_viandas.png";
import baruFabricaLogo from "assets/logos/baru_fabrica.png";

// ----- ICONS -----
// SideMenu

import {
  faTimes,
  faSitemap,
  faSeedling,
  faUtensils,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Quienes somos
import { faListAlt, faBook, faEye } from "@fortawesome/free-solid-svg-icons";

// Viandas - Cards
import {
  faGraduationCap,
  faBuilding,
  faBus,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

// Viandas - Slider
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Contacto
import {
  faHandshake,
  faShoppingCart,
  faTruckMoving,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// ----------

export const HEADER_LABELS = {
  title: "Barú Gastronomía",
};

export const FOOTER_LABELS = {
  copyright: "Copyright © Baru Gastronomía",
  design: "Design & Dev. By Attic Developers",
  info: "2019",
};

export const ROUTES_LABELS = {
  quienesSomos: "¿Quiénes somos?",
  nuestrosEmprendimientos: "Servicios y emprendimientos",
  viandasEmpresariales: "Nuestras viandas",
  contacto: "Contacto",
};

export const SIDEMENU = {
  title: "Barú gastronomía",
  icon: faTimes,
  itemIcons: {
    quienesSomos: faSitemap,
    nuestrosEmprendimientos: faSeedling,
    viandasEmpresariales: faUtensils,
    contacto: faEnvelope,
  },
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
      baruViandas: baruViandasLogo,
      baruFabrica: baruFabricaLogo
    },
  },
  organization: {
    title: "Quiénes somos",
    description:
      "Este es un espacio, donde con dedicación y responsabilidad, brindamos un servicio gastronómico versátil que incluye entre lo más destacado los servicios de catering, eventos, comedores/restaurantes propios y/o tercerizados para servicios de comida, elaboración de viandas para empresas, parques eólicos, establecimientos de la salud y distribución de productos de elaboración propia.",
    cards: {
      mission: {
        title: "Misión",
        description:
          "Poder ofrecer a nuestros comensales, diferentes opciones gastronómicas en el marco del tipo de servicio que nos sea requerido.",
        icon: faListAlt,
      },
      compromise: {
        title: "Compromiso y filosofía",
        description:
          "Consideramos que la gastronomía representa en nuestra empresa, las raíces que nos adhieren a nuestro desarrollo laboral y económico. Por otro lado, la honestidad es la base filosófica sobre la que reposan nuestros sueños. Entendemos a la gastronomía en un concepto amplio, que va más allá del sabor o aroma de un plato en particular, pues buscamos dejar una experiencia única-de todos los sentidos- en nuestros comensales.",
        icon: faBook,
      },
      vision: {
        title: "Visión",
        description:
          "Convertirnos en una empresa distinguida y renombrada en el ambiente gastronómico, tanto por los sistemas de trabajo desarrollados, como así también por la calidad de nuestros productos y servicios, pudiendo en ese sentido, lograr captar la atención de los más exigentes.",
        icon: faEye,
      },
    },
  },
};

export const SERVICIOS = {
  title: "Nuestros servicios",
  services: {
    baruFabrica: {
      title: "Barú Fábrica",
      logo: baruFabricaLogo,
      description:
        "Próximamente elaboraciones artesanales de venta al público y mayoristas.",
      social: {
        instagram: {
          label: "/baru.gastronomia",
          link: "https://www.instagram.com/baru.gastronomia/",
        },
      },
    },
    baruEventos: {
      title: "Barú Eventos",
      logo: baruEventosLogo,
      description:
        "Casamientos, fiestas de 15, cumpleaños, despedidas, reuniones, etc.",
      info: {
        phone: "2915087902",
      },
      social: {
        instagram: {
          label: "/baru.gastronomia",
          link: "https://www.instagram.com/baru.gastronomia/",
        },
      },
    },
    baruViandas: {
      title: "Barú Viandas",
      logo: baruViandasLogo,
      description:
        "Viandas escolares, turismo, parques eólicos, particulares y empresariales.",
      info: {
        phone: "2915087902",
      },
      social: {
        instagram: {
          label: "/baru.gastronomia",
          link: "https://www.instagram.com/baru.gastronomia/",
        },
      },
    },
    baraka: {
      title: "Baraka",
      logo: barakaLogo,
      description:
        "Espacio renovado con venta de comida al peso, calientes y frías. Elaboraciones artesanales. Almacén de productos secos.",
      info: {
        address: "Alvarado 187",
        schedule: "Lunes a Viernes 10-14hs y 19-22hs; Sábados 10-14hs",
        phone: "2914551814 - 2914121979",
      },
      social: {
        instagram: {
          label: "/barakatiendadecomidas",
          link: "https://www.instagram.com/barakatiendadecomidas/",
        },
        facebook: {
          label: "Baraka Tienda de comidas y Almacén",
          link:
            "https://www.facebook.com/Baraka-Tienda-de-comidas-y-Almac%C3%A9n-993272750808320/?ref=br_rs",
        },
      },
    },
    rdBosque: {
      title: "Resto del Bosque",
      logo: rdBosqueLogo,
      description:
        "Restaurante. Servicio de comida en lunchonettes con venta al peso. Sushi. Helados. Panificados. Vinos de autor. Almacén saludable.",
      info: {
        address: "Bosque Alto",
        schedule: "Todos los días 12-14:30hs y 20-23:30hs",
        phone: "2914075010",
      },
      social: {
        instagram: {
          label: "/restodelbosque",
          link: "https://www.instagram.com/restodelbosque/",
        },
        facebook: {
          label: "Resto del Bosque",
          link: "https://www.facebook.com/restodelbosque/?ref=br_rs",
        },
      },
    },
    slBrasas: {
      title: "Santas las Brasas",
      logo: slbrasasLogo,
      description:
        "Parrilla libre, pastas, platos vegetarianos, menú del día, minutas y espacio con pelotero para los niños.",
      info: {
        address: "Complejo Rodovía, Ruta 3, Km 969,5",
        schedule: "Todos los días 12-15:30 y 19:30-0hs",
        phone: "4846869 - 2915087902",
      },
      social: {
        instagram: {
          label: "/santaslasbrasas",
          link: "https://www.instagram.com/santaslasbrasas/",
        },
        facebook: {
          label: "Santas Las Brasas",
          link: "https://www.facebook.com/santaslasbrasas/",
        },
      },
    },
  },
};

export const VIANDAS = {
  title: "Nuestros platos y viandas",
  lunchTypes: {
    transporte: {
      title: "Transporte",
      description:
        "Servicio de comedor o viandas, clásicas o envasadas al vacío.",
      icon: faBus,
    },
    empresas: {
      title: "Empresas",
      description:
        "Servicio de almuerzos, cenas, refrigerios, desayunos, coffe break, catering, eventos, parada de planta.",
      icon: faBuilding,
    },
    particulares: {
      title: "Particulares",
      description:
        "Servicio de restaurante, viandas, eventos, plan de viandas congeladas.",
      icon: faUserAlt,
    },
    egresados: {
      title: "Egresados",
      description:
        "Servicio de viandas escolares y, fiestas de cierre de fin de año y egresados. ",
      icon: faGraduationCap,
    },
  },
  icons: {
    backward: faArrowLeft,
    forward: faArrowRight,
  },
};

export const CONTACTO = {
  title: "Contacto",
  sections: {
    compras: {
      title: "Ventas",
      description: "Texto descriptivo para ventas",
      icon: faShoppingCart,
      contact: "ventas@barugastronomia.com.ar",
      reverse: false,
    },
    proveedores: {
      title: "Compras",
      description: "Texto descriptivo para compras",
      icon: faTruckMoving,
      contact: "compras@barugastronomia.com.ar",
      reverse: true,
    },
    administracion: {
      title: "Administración",
      description: "Texto descriptivo para administración",
      contact: "administracion@barugastronomia.com.ar",
      icon: faHandshake,
      reverse: false,
    },
    recursos: {
      title: "¿Querés formar parte de nuestro equipo?",
      description: "Escribinos y adjunta tu CV: ",
      contact: "rrhh@barugastronomia.com.ar",
      icon: faUsers,
      reverse: true,
    },
  },
};
