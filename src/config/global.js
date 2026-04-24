export default {
  global: {
    Name:
      'Fundamentos del ciclo de vida del <em>software</em> e ingeniería de requisitos',
    Description:
      'Este componente formativo aborda los fundamentos del ciclo de vida del <em>software</em> y la ingeniería de requisitos, destacando la importancia de identificar, analizar y documentar las necesidades del sistema. Asimismo, presenta los roles involucrados, las técnicas de elicitación y diversas herramientas utilizadas para la captura y modelado de requisitos en proyectos de desarrollo de <em>software</em>.',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del ciclo de vida del <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos del ciclo de vida del <em>software</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelos del ciclo de vida del <em>software</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fases del ciclo de vida del <em>software</em>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Objetivos de las fases del ciclo de vida del <em>software</em>',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fase de definición de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Alcance de la fase de requisitos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Importancia de la definición de requisitos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Resultados de la fase de requisitos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Requisitos en el desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Requisitos funcionales', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Requisitos no funcionales', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Requisitos de restricción', hash: 't_3_3' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ingeniería de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Áreas de la ingeniería de requisitos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Fases de la ingeniería de requisitos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elicitación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Planeación de la elicitación',
            hash: 't_5_1',
          },
          { numero: '5.2', titulo: 'Fuentes de información', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Técnicas de elicitación', hash: 't_5_3' },
          {
            numero: '5.4',
            titulo: 'Instrumentos de recolección de información',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Principios y buenas prácticas',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Roles en la ingeniería de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Usuarios y actores', hash: 't_6_1' },
          {
            numero: '6.2',
            titulo: '<em>Stakeholders</em> o partes interesadas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Cliente líder y dueño del producto',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Equipo de desarrollo y analista',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas de modelado de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos de herramientas de modelado',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Características de las herramientas de modelado',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Herramientas para la captura de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '8.1', titulo: 'Diagramas de casos de uso', hash: 't_8_1' },
          { numero: '8.2', titulo: 'Historias de usuario', hash: 't_8_2' },
          { numero: '8.3', titulo: '<em>Storyboard</em>', hash: 't_8_3' },
        ],
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_228146_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actor',
      significado:
        'Entidad externa que interactúa con el sistema para lograr un objetivo específico dentro de un caso de uso. Puede ser una persona, otro sistema o un dispositivo.',
    },
    {
      termino: 'Analista de requisitos',
      significado:
        'Profesional encargado de identificar, documentar, analizar y validar las necesidades del negocio y de los usuarios para transformarlas en requisitos del sistema.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'Descripción estructurada de las interacciones entre un actor y el sistema con el fin de lograr una funcionalidad específica.',
    },
    {
      termino: 'Elicitación de requisitos',
      significado:
        'Proceso mediante el cual se identifican, recopilan y comprenden las necesidades y expectativas de los usuarios y demás partes interesadas.',
    },
    {
      termino: 'Historia de usuario',
      significado:
        'Descripción breve de una funcionalidad del sistema desde la perspectiva del usuario, utilizada comúnmente en metodologías ágiles.',
    },
    {
      termino: 'Ingeniería de requisitos',
      significado:
        'Disciplina de la ingeniería de <em>software</em> encargada de identificar, analizar, documentar y gestionar los requisitos de un sistema.',
    },
    {
      termino: 'Modelado',
      significado:
        'Representación conceptual o gráfica de un sistema, sus componentes y sus relaciones para facilitar su comprensión y análisis.',
    },
    {
      termino: 'Requisito',
      significado:
        'Condición, capacidad o característica que debe cumplir un sistema para satisfacer una necesidad del usuario o del negocio.',
    },
    {
      termino: 'Requisito funcional',
      significado:
        'Describe las funciones o comportamientos que el sistema debe ejecutar para responder a las necesidades del usuario.',
    },
    {
      termino: 'Requisito no funcional',
      significado:
        'Define las condiciones de calidad o restricciones bajo las cuales debe operar el sistema, como rendimiento, seguridad o usabilidad.',
    },
    {
      termino: 'Requisito de restricción',
      significado:
        'Limitación técnica, normativa o tecnológica que condiciona el diseño o funcionamiento del sistema.',
    },
    {
      termino: 'Stakeholder',
      significado:
        'Persona, grupo u organización que tiene interés en el sistema o que puede verse afectado por su desarrollo o implementación.',
    },
    {
      termino: '<em>Storyboard</em>',
      significado:
        'Representación visual que describe de manera secuencial cómo un usuario interactúa con el sistema a través de pantallas o escenarios.',
    },
    {
      termino: 'UML (Lenguaje Unificado de Modelado)',
      significado:
        'Lenguaje estándar utilizado para representar gráficamente sistemas de <em>software</em> mediante diferentes tipos de diagramas.',
    },
    {
      termino: 'Validación de requisitos',
      significado:
        'Proceso mediante el cual se verifica que los requisitos definidos representan correctamente las necesidades de los usuarios y del negocio.',
    },
  ],
  referencias: [
    {
      referencia:
        'IEEE Computer Society. (2014). <em>Guía SWEBOK: Guía para el cuerpo de conocimiento de la ingeniería de <em>software</em></em> (Versión 3.0). IEEE Computer Society.',
      link: '',
    },
    {
      referencia:
        'ISO/IEC. (2018). ISO/IEC/IEEE 29148:2018 <em>Systems and <em>software</em> engineering - Life cycle processes - Requirements engineering</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2016). <em>Ingeniería del <em>software</em>: Un enfoque práctico</em> (8.ª ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2011). <em>Ingeniería del <em>software</em></em> (9.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (s. f.). <em>Ingeniería de requisitos en el desarrollo de <em>software</em></em>.',
      link: '',
    },
    {
      referencia:
        'Wiegers, K., & Beatty, J. (2014). <em>Ingeniería de requisitos de <em>software</em></em> (3.ª ed.). Microsoft Press.',
      link: '',
    },
    {
      referencia:
        'Wazlawick, R. S. (2015). <em>Análisis y diseño de sistemas de información orientados a objetos</em>. Elsevier.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
