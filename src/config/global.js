export default {
  global: {
    componenteFormativo: 'Despliegue de <i>software</i>',
    descripcionCurso:
      'Este componente formativo está diseñado para brindar los conceptos y conocimientos orientados a la implementación del <i>software</i>, donde conocerá todos los pasos y herramientas a tener en cuenta para realizar este proceso de manera correcta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas de despliegue',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ambientes de producción o desarrollo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Actividades, roles y tipos de despliegue',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas de despliegue',
      referencia:
        'Dauzon, Samuel. Git : Controle La Gestión De Sus Versiones (conceptos, Utilización Y Casos Prácticos). 2ª Edición. ed. Barcelona: Ediciones ENI, 2022. Recursos Informáticos. Web.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3GIT ',
    },
    {
      tema: 'Herramientas de despliegue',
      referencia:
        'Rojas-Albarracin, G. et al. (2017). Plataforma computacional sobre Amazon Web Services de renderizado distribuido/Computational Platform About Amazon Web Services Distributed Rendering/Plataforma de computacao sob Amazon Web Services AWS de renderizacao distribuida. <i>Revista Cientifica Del Centro De Investigaciones Y Desarrollo Cientifico De La Universidad Distral Francisco Jose De Caldas, (30)</i>.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_gale_infotracmisc_A510482190',
    },
    {
      tema: 'Ambientes de producción o desarrollo',
      referencia:
        'Sarosi, A. (2022). <i>Entorno de Desarrollo vs Producción: El proceso de publicar una App Web.</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9GaVCsPuDB4',
    },
    {
      tema: 'Actividades, roles y tipos de despliegue',
      referencia:
        'DesarrolloWeb.com. (2020). <i>Hosting y despliegue continuo gratuito con GitHub y Netlify.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OomyaFBGlyU',
    },
  ],
  glosario: [
    {
      termino: 'AZURE',
      significado:
        'plataforma soportada por Microsoft para el despliegue de aplicaciones informáticas.',
    },
    {
      termino: 'Actualización',
      significado:
        'proceso que reemplaza o copia archivos nuevos en el disco duro de una computadora o servidor.',
    },
    {
      termino: 'Ambiente de desarrollo',
      significado:
        'espacio donde se desarrolla el sistema de manera local y se realizan las pruebas iniciales del sistema.',
    },
    {
      termino: 'Ambiente de producción',
      significado:
        'espacio donde se coloca en marcha el <i>software</i> desarrollado para que los usuarios finales puedan usarlo.',
    },
    {
      termino: 'AWS',
      significado:
        'plataforma soportada por Amazon que presta los servicios de despliegue de aplicaciones informáticas.',
    },
    {
      termino: 'Desinstalación',
      significado:
        'proceso de eliminar los archivos de instalación de una aplicación del disco duro de un dispositivo.',
    },
    {
      termino: 'GIT',
      significado:
        'aplicación que permite llevar un control de código fuente de un aplicativo que se desarrolla.',
    },
    {
      termino: 'Instalación',
      significado:
        'proceso de copiar los archivos necesarios para poner en marcha un sistema de información.',
    },
    {
      termino: 'JENKINS',
      significado:
        'sistema para realizar el proceso de integración continua y pruebas de <i>software</i>.',
    },
    {
      termino: 'Reporte',
      significado:
        'consulta que integra varios datos e información de un proceso y se realiza de manera organizada.',
    },
  ],
  referencias: [
    {
      referencia:
        'IBM Documentación. (2022). <i>Entornos de desarrollo y producción</i>.',
      link:
        'https://www.ibm.com/docs/es/baw/20.x?topic=overview-case-development-production-environments',
    },
    {
      referencia:
        'Microsoft Soporte. (s.f.). <i>Access SQL: conceptos básicos, vocabulario y sintaxis</i>.',
      link:
        'https://support.microsoft.com/es-es/office/access-sql-conceptos-b%C3%A1sicos-vocabulario-y-sintaxis-444d0303-cde1-424e-9a74-e8dc3e460671#bm2',
    },
    {
      referencia: 'NetApp. (s.f.). <i>¿Qué es DevOps?</i>',
      link: 'https://www.netapp.com/es/devops-solutions/what-is-devops/',
    },
    {
      referencia:
        'Ortiz Clavijo, L. F.  et al. (2018). Computación En La Nube: Estudio De Herramientas Orientadas a La Industria 4.0. <i>Lampsakos</i>, (20), p. 68-75. ',
      link:
        'https://revistas.ucatolicaluisamigo.edu.co/index.php/lampsakos/article/view/2560',
    },
    {
      referencia:
        'Quezada Sarmiento, P. y Suárez-Guerrero, C. (2021). La Computación en la Nube en el proceso formativo en Programación Web. RISTI - Revista Iberica de Sistemas e Tecnologias de Informacao, (E42), p. 1-11.',
      link:
        'https://www.researchgate.net/publication/346556176_La_Computacion_en_la_Nube_en_el_proceso_formativo_en_Programacion_Web',
    },
    {
      referencia: 'Turingears. (s.f.). <i>¿Qué es GitLab?</i>',
      link: 'https://turingears.com/que-es-gitlab/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
